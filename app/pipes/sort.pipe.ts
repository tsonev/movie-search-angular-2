import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
	name: 'sort'
})
export class SortPipe implements PipeTransform {
	transform(items: any[], sortBy?: string, order?: string) {
		if (Array.isArray(items) && items.length > 0) {
			if (sortBy) {
				if (order === "desc") {
					return items.sort(
						(x, y) =>
							y[sortBy].toString()
								.localeCompare(x[sortBy].toString()));
				} else {
					return items.sort(
						(x, y) =>
							x[sortBy].toString()
								.localeCompare(y[sortBy].toString()));
				}
			} else {
				return items.sort();
			}
		}
	}
};
