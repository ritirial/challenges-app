import { Routes } from '@angular/router';
import { Challenge1Component } from './challenge1/challenge1.component';
import { Challenge3Component } from './challenge3/challenge3.component';
import { Challenge5Component } from './challenge5/challenge5.component';


export const routes: Routes = [
	{ path: 'challenge-1-component', component: Challenge1Component },
	{ path: 'challenge-3-component', component: Challenge3Component },
	{ path: 'challenge-5-component', component: Challenge5Component },
];
