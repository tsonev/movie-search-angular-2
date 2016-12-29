import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
// import { AcStar } from './star';

@Component({
	selector: 'ac-stars',
	template: `
	<div class="stars" title="{{_rating}}">
	<ac-star
		*ngFor="let star of stars"
		[active]="star <= _rating"
		(rate)="onRate($event)"
		[position]="star"
	>
	</ac-star>
	</div>
	`, styles: [`
	.stars {
	  
	}
	`]
})
export class AcStars implements OnInit {
	@Input('from') starCount: number;
	@Input('rating') rating: number;
	@Output() rate = new EventEmitter();
	stars: number[] = [];
	_rating = this.rating;

	constructor() {

	}

	onRate(star: number) {
		this.rate.emit(star);
		this._rating = star;
	}

	ngOnInit() {
		this._rating = +this.rating;
		const count = this.starCount < 0 ? 5 : this.starCount;
		for (let i = 0; i < count; i++) {
			this.stars.push(i + 1);
		}
	}
}
