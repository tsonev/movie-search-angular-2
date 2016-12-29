import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list.component';

export const routes: Routes = [
	{ path: 'movie-list', component: MovieListComponent }
];

export const routing = RouterModule.forChild(routes);