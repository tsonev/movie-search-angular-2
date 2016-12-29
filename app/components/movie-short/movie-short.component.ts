import { Component, Input, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map'

import { Movie } from '../../models/movie';

@Component({
	selector: "[mvdb-movie-short]",
	templateUrl: './movie-short.component.html'
})
export class MovieShortComponent implements OnInit {
	@Input('movie') movie: Movie;


	constructor() {

	}


	ngOnInit() {

	}


}
