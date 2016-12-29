import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './movie.component';

export const routes: Routes = [
	{ path: ':title/details', component: MovieComponent }
];

export const routing = RouterModule.forChild(routes);