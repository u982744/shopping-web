"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var app_component_1 = require("./app/app.component");
var app_service_1 = require("./app/app.service");
// if (environment.production) {
//   enableProdMode();
// }
platform_browser_dynamic_1.bootstrap(app_component_1.Shopping2AppComponent, [http_1.HTTP_PROVIDERS, app_service_1.AppService]);
//# sourceMappingURL=main.js.map