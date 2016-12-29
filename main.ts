import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/components/app.module';
require('./app/assets/css/angular-material.min.css');
require('./app/assets/css/style.css');
require('./app/assets/img/NA.jpg');

if (process.env.ENV === 'production') {
	enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
