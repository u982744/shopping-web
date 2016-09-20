import {bootstrap} from "@angular/platform-browser-dynamic";
import {HTTP_PROVIDERS} from "@angular/http";
//import {enableProdMode} from "@angular/core";
import {environment} from "./app/environment";
import {Shopping2AppComponent} from "./app/app.component";
import {AppService} from "./app/app.service";

// if (environment.production) {
//   enableProdMode();
// }

bootstrap(Shopping2AppComponent, [HTTP_PROVIDERS, AppService]);
