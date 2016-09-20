import {Component} from "@angular/core";
import {AppService} from "./app.service";
// import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
//import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";

import {LoginPage} from "./pages/login/login.component";
import {ListPage} from "./pages/list/list.component";
import {ItemsPage} from "./pages/items/items.component";

@Component({
  selector: "shopping2-app",
  template: `
    <div [ngSwitch]="page">
      <div *ngSwitchCase="'login'">
        <page-login></page-login>
      </div>
      <div *ngSwitchCase="'list'">
        <page-list></page-list>
      </div>
      <div *ngSwitchCase="'items'">
        <page-items></page-items>
      </div>
      <div *ngSwitchDefault>
        <page-login></page-login>
      </div>
    </div>
  `,
  directives: [LoginPage, ListPage, ItemsPage],
  providers: []
  //directives: [ROUTER_DIRECTIVES],
  //providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
// @RouteConfig([
//   { path: "/", component: LoginPage, name: "Home" },
//   { path: "/home", component: LoginPage, name: "Home" },
//   { path: "list", component: ListPage },
//   { path: "list/:listId/items", component: ItemsPage }
// ])
export class Shopping2AppComponent {
  public page: string;

  constructor(private _appService: AppService) {
    this.page = _appService.getPage();

    _appService.pageDespatchSource$.subscribe(
      pageObj => {
        //console.log("Shopping2AppComponent subscribe pageDespatchSource", pageObj);
        this.page = pageObj.page;
      })
  }
}
