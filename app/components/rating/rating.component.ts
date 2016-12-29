import { Component, Input } from '@angular/core';
import 'rxjs/add/operator/map';


@Component({
	selector: 'movie-rating',
	templateUrl: './rating.component.html',
})
export class RatingComponent {

	@Input('rating') rating: number = 0;
	@Input('from') from: number = 0;
	@Input('votes') votes: number = 0;

	constructor() {
	}
}
