import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { MovieListComponent } from './movie-list.component';
import { MovieShortComponent } from '../movie-short/movie-short.component';
import { SortPipe } from '../../pipes/sort.pipe';
import { routing } from './movie-list.routing';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		InfiniteScrollModule,
		MaterialModule.forRoot(),
		routing
	],
	declarations: [
		MovieListComponent,
		MovieShortComponent,
		SortPipe
	],
	bootstrap: [
		MovieListComponent
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class MovieListModule { }
