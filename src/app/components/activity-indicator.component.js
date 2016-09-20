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
var ActivityIndicator = (function () {
    function ActivityIndicator() {
        this.isLoading = false;
        this.message = "Loading";
    }
    __decorate([
        core_1.Input("isLoading"), 
        __metadata('design:type', Object)
    ], ActivityIndicator.prototype, "isLoading", void 0);
    __decorate([
        core_1.Input("message"), 
        __metadata('design:type', Object)
    ], ActivityIndicator.prototype, "message", void 0);
    ActivityIndicator = __decorate([
        core_1.Component({
            selector: "activity-indicator",
            inputs: ["isLoading"],
            template: "\n    <div [class.hidden]=\"!isLoading\">\n      <img src=\"./app/assets/images/loading.gif\">\n      <span>{{ message }}</span>\n    </div>\n  ",
            styles: ["\n    div {\n      position: fixed;\n      bottom: 0;\n      right: 0;\n      padding: 0.5em;\n      background: white;\n      border: solid 1px #c8cccf;\n      border-width: 1px 0 0 1px;\n      display: flex;\n    }\n    img {\n      height: 50px;\n    }\n    span {\n      line-height: 50px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ActivityIndicator);
    return ActivityIndicator;
}());
exports.ActivityIndicator = ActivityIndicator;
//# sourceMappingURL=activity-indicator.component.js.map