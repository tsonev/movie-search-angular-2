import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { RatingComponent } from './rating.component';

import { AcStars } from './stars';
import { AcStar } from './star';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		InfiniteScrollModule,
		MaterialModule.forRoot()
	],
	declarations: [
		RatingComponent, AcStars, AcStar
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	exports: [RatingComponent]
})
export class RatingModule { }
