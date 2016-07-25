import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {HollywoodComponent} from './hollywood.component';
import {KollywoodComponent} from './kollywood.component';
import {BollywoodComponent} from './bollywood.component';
import {NotFoundComponent} from './not-found.component';

@RouteConfig([
	{ path: '/', name: 'Home', component: HomeComponent },
	{ path: '/hollywood', name: 'Hollywood', component: HollywoodComponent },
	{ path: '/kollywood', name: 'Kollywood', component: KollywoodComponent },
	{ path: '/bollywood', name: 'Bollywood', component: BollywoodComponent },
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent },
	{ path: '/*other', name: 'Other', redirectTo: ['Home'] }
])

@Component({
	selector: 'my-app',
	template: `
		<navbar></navbar>
		<div class="container">
			<router-outlet></router-outlet>
		</div>
	`,
	directives: [NavbarComponent, ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})

export class AppComponent { }