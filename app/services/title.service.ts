import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class TitleService {

	public title: ReplaySubject<any> = new ReplaySubject(1);

	setTitle(title: any) {
		this.title.next(title);
	}
}
