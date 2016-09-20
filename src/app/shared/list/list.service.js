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
var http_1 = require("@angular/http");
var config_1 = require("../config");
var list_1 = require("./list");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var ListService = (function () {
    function ListService(_http) {
        this._http = _http;
    }
    ListService.prototype.load = function () {
        //console.log("Config", Config);
        return this._http.get(config_1.Config.apiUrl + "list/" + config_1.Config.userId)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var list = [];
            data.result.forEach(function (item) {
                list.push(new list_1.List(item._id, item.name));
            });
            return list;
        })
            .catch(this.handleErrors);
    };
    ListService.prototype.add = function (name) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.post(config_1.Config.apiUrl + "list", JSON.stringify({
            name: name,
            userId: config_1.Config.userId
        }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            //console.log("add map", data.id, name);
            return new list_1.List(data.id, name);
        })
            .catch(this.handleErrors);
    };
    ListService.prototype.delete = function (id) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.delete(config_1.Config.apiUrl + "list/" + id, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    ListService.prototype.share = function (listId, email) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.put(config_1.Config.apiUrl + "list/" + listId + "/adduser/" + email, JSON.stringify({}), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    ListService.prototype.handleErrors = function (error) {
        //console.log("handleErrors", error);
        //console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    ListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;
//# sourceMappingURL=list.service.js.map