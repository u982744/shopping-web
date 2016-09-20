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
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var app_service_1 = require("../../app.service");
var LoginPage = (function () {
    function LoginPage(_userService, _appService) {
        this._userService = _userService;
        this._appService = _appService;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new user_1.User();
        // this.user.email = "berman.tim@gmail.com";
        // this.user.password = "Shiznit!";
    }
    LoginPage.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address");
            return;
        }
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this._userService.login(this.user)
            .subscribe(function () {
            //console.log("login success...");
            _this.isAuthenticating = false;
            _this._appService.setPage("list", {});
        }, function (error) {
            _this.isAuthenticating = false;
            alert("Unfortunately we could not find your account.");
        });
    };
    LoginPage.prototype.signUp = function () {
        var _this = this;
        this._userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.isAuthenticating = false;
            _this.toggleDisplay();
        }, function (error) {
            alert(error.json().message);
            _this.isAuthenticating = false;
        });
    };
    LoginPage.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: "page-login",
            providers: [user_service_1.UserService],
            templateUrl: "app/pages/login/login.html",
            styleUrls: ["app/pages/login/login.css"],
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, app_service_1.AppService])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.component.js.map