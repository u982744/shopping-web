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
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
// import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
//import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
var items_component_1 = require("./pages/items/items.component");
var Shopping2AppComponent = (function () {
    function Shopping2AppComponent(_appService) {
        var _this = this;
        this._appService = _appService;
        this.page = _appService.getPage();
        _appService.pageDespatchSource$.subscribe(function (pageObj) {
            //console.log("Shopping2AppComponent subscribe pageDespatchSource", pageObj);
            _this.page = pageObj.page;
        });
    }
    Shopping2AppComponent = __decorate([
        core_1.Component({
            selector: "shopping2-app",
            template: "\n    <div [ngSwitch]=\"page\">\n      <div *ngSwitchCase=\"'login'\">\n        <page-login></page-login>\n      </div>\n      <div *ngSwitchCase=\"'list'\">\n        <page-list></page-list>\n      </div>\n      <div *ngSwitchCase=\"'items'\">\n        <page-items></page-items>\n      </div>\n      <div *ngSwitchDefault>\n        <page-login></page-login>\n      </div>\n    </div>\n  ",
            directives: [login_component_1.LoginPage, list_component_1.ListPage, items_component_1.ItemsPage],
            providers: []
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], Shopping2AppComponent);
    return Shopping2AppComponent;
}());
exports.Shopping2AppComponent = Shopping2AppComponent;
//# sourceMappingURL=app.component.js.map