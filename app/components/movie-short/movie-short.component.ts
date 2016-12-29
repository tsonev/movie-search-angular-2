import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { Movie } from '../../models/movie';

@Component({
	selector: '[mvdb-movie-short]',
	templateUrl: './movie-short.component.html'
})
export class MovieShortComponent implements OnInit {
	@Input('movie') movie: Movie;


	constructor() {

	}


	ngOnInit() {

	}


}
