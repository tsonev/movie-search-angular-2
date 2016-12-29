import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';

import { MovieService } from '../../services/movie.service';
import { QueryService } from '../../services/query.service';
import { TitleService } from '../../services/title.service';


import { Query } from '../../models/query';
import { Movie } from '../../models/movie';

@Component({
	selector: 'movie-list',
	templateUrl: './movie-list.component.html',
	providers: [MovieService, FormBuilder]
})
export class MovieListComponent implements OnInit {

	title: string = 'Movie Search';
	totalResults: number;
	resultsPerPage: number = 10;
	error: string;
	movies: Movie[] = [];
	sort: string = 'Title';
	order: string = 'asc';
	query: Query = {
		s: '',
		y: '',
		type: '',
		page: 1
	};

	private infiniteScrolling: boolean = false;

	constructor(private route: ActivatedRoute,
		private router: Router,
		private movieService: MovieService,
		private queryService: QueryService,
		private titleService: TitleService,
		private formBuilder: FormBuilder) {

	}

	private onSuccess(res: any) {
		if (this.infiniteScrolling) {
			if (Array.isArray(res.Search)) {
				this.movies = this.movies.concat(res.Search);
				this.totalResults = Number(res.totalResults);
			}
		} else {
			if (Array.isArray(res.Search)) {
				this.movies = res.Search;
				this.totalResults = Number(res.totalResults);
			} else {
				this.movies = [];
				this.totalResults = 0;
				this.error = res.Error;
			}
		}
		this.infiniteScrolling = false;

	}
	private onError(error: any) {
		this.movies = [];
		this.totalResults = 0;
	}
	private getMovies() {
		this.movieService.search(this.query)
			.subscribe(
			(res: any) => { this.onSuccess(res); },
			(error: any) => { this.onError(error); }
			);
	}


	public hasMore() {
		return this.query.page * this.resultsPerPage < this.totalResults;
	}


	public onScroll() {
		if (!this.infiniteScrolling) {
			if (this.hasMore()) {
				this.query.page++;
				this.infiniteScrolling = true;
				this.getMovies();
			}
		}
	}

	public viewDetails(movie: Movie) {
		this.router.navigate([movie.Title + '/details', { id: movie.imdbID }]);
	}

	ngOnInit() {
		this.titleService.setTitle('Movie Search');
		this.route.params
			.switchMap((params: Params) => {
				this.query.s = params['s'] || '';
				this.query.type = params['type'] || '';
				this.query.y = params['y'] || '';
				this.query.page = params['page'] || 1;
				this.queryService.setQuery(this.query);
				return this.movieService.search(this.query);
			})
			.subscribe(
			(res: any) => { this.onSuccess(res); },
			(error: any) => { this.onError(error); }
			);
	}

}
