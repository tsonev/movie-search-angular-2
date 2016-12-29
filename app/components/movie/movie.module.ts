import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { MovieComponent } from './movie.component';
import { RatingModule } from '../rating/rating.module';
import { routing } from './movie.routing';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		MaterialModule.forRoot(),
		RatingModule,
		routing
	],
	declarations: [
		MovieComponent,
	],
	bootstrap: [
		MovieComponent
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class MovieModule { }
