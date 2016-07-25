"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var navbar_component_1 = require('./navbar.component');
var home_component_1 = require('./home.component');
var hollywood_component_1 = require('./hollywood.component');
var kollywood_component_1 = require('./kollywood.component');
var bollywood_component_1 = require('./bollywood.component');
var not_found_component_1 = require('./not-found.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'Home', component: home_component_1.HomeComponent },
            { path: '/hollywood', name: 'Hollywood', component: hollywood_component_1.HollywoodComponent },
            { path: '/kollywood', name: 'Kollywood', component: kollywood_component_1.KollywoodComponent },
            { path: '/bollywood', name: 'Bollywood', component: bollywood_component_1.BollywoodComponent },
            { path: '/not-found', name: 'NotFound', component: not_found_component_1.NotFoundComponent },
            { path: '/*other', name: 'Other', redirectTo: ['Home'] }
        ]),
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<navbar></navbar>\n\t\t<div class=\"container\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t",
            directives: [navbar_component_1.NavbarComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map