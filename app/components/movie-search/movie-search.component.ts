import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

import 'rxjs/add/operator/map'

import { Query } from '../../models/query';
import { Movie } from '../../models/movie';

import { QueryService } from '../../services/query.service';

@Component({
	selector: 'mvdb-movie-search',
	templateUrl: './movie-search.component.html',
	providers: [FormBuilder]
})
export class MovieSearchComponent implements OnInit, OnDestroy {
	query: Query = {
		s: '',
		y: '',
		type: '',
		page: 1
	};
	form: any;
	private subscription: any = {};

	constructor(private route: ActivatedRoute,
		private router: Router,
		private queryService: QueryService,
		private formBuilder: FormBuilder) {

	}

	private delayedSearch(callback: Function) {
		if (this.subscription.search) {
			this.subscription.search.unsubscribe();
		}
		let timer = TimerObservable.create(2000, 1000);
		this.subscription.search = timer.subscribe((t: number) => {
			if (t >= 1) {
				this.subscription.search.unsubscribe();
				callback();
			}
		});
	}

	doSearch() {
		this.query.page = 1;
		this.router.navigate(['/movie-list', this.query]);
	}

	ngOnInit() {
		this.form = this.formBuilder.group(this.query);
		this.subscription.query = this.queryService.query
			.subscribe(query => {
				this.query = query;

				this.form = this.formBuilder.group(this.query);
				this.subscription.form = this.form.valueChanges.subscribe((data: any) => {
					// console.log('Form changes', data);
					data.page = 1;
					this.query = data;
					this.delayedSearch(() => {
						this.doSearch();
					})

				});
			});
	}

	ngOnDestroy() {
		if (this.subscription) {
			for (let prop of this.subscription) {
				if (this.subscription.hasOwnProperty(prop)) {
					this.subscription[prop].unsubscribe();
				}
			}
		}
	}

}
