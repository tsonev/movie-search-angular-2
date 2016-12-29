import { Component, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';

import { Movie } from '../../models/movie';
import { QueryByTitle } from '../../models/query';

import { MovieService } from '../../services/movie.service';
import { TitleService } from '../../services/title.service';

@Component({
	selector: 'movie-details',
	templateUrl: './movie.component.html',
	providers: [MovieService]
})
export class MovieComponent {

	title: string;
	loading: boolean = true;
	movie: Movie = {};
	query: QueryByTitle = {
		i: '',
		t: '',
		type: '',
		y: '',
		plot: 'full'
	};

	constructor(private route: ActivatedRoute,
		private router: Router,
		private titleService: TitleService,
		private movieService: MovieService) {
	}


	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => {
				this.query.i = params['id'];
				return this.movieService.getMovieByTitle(this.query)
			})
			.subscribe((movie: Movie) => {
				this.loading = false;
				this.titleService.setTitle(movie.Title);
				return this.movie = movie;
			});
	}

}
