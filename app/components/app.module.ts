import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { routing } from '../routes';

import { MovieModule } from './movie/movie.module';
import { MovieListModule } from './movie-list/movie-list.module';

import { QueryService } from '../services/query.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		MaterialModule.forRoot(),
		MovieModule,
		MovieListModule,
		FormsModule,
		ReactiveFormsModule,
		routing
	],
	providers: [
		QueryService
	],
	declarations: [AppComponent, MovieSearchComponent],
	bootstrap: [AppComponent],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class AppModule { }
