import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { MovieComponent } from './movie.component';
import { AcStars } from '../ac-rating/stars';
import { AcStar } from '../ac-rating/star';
import { routing } from './movie.routing';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		MaterialModule.forRoot(),
		routing
	],
	declarations: [
		AcStars,
		AcStar,
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