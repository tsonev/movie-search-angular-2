import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'movie-list', pathMatch: 'full' },
	{ path: '**', redirectTo: 'movie-list' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });