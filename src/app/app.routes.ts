import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { Challenge1Component } from './dashboard/challenge1/challenge1.component';
import { Challenge3Component } from './dashboard/challenge3/challenge3.component';
import { Challenge5Component } from './dashboard/challenge5/challenge5.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent, children: [
		{ path: '', redirectTo: '/dashboard/challenge-1-component', pathMatch: 'full' },
		{ path: 'challenge-1-component', component: Challenge1Component },
		{ path: 'challenge-3-component', component: Challenge3Component },
		{ path: 'challenge-5-component', component: Challenge5Component },
	] },
	{ path: '**', redirectTo: '/login' },
];
