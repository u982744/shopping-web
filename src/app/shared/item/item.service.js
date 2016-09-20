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
var item_1 = require("./item");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var ItemService = (function () {
    function ItemService(_http) {
        this._http = _http;
    }
    ItemService.prototype.load = function (listId) {
        return this._http.get(config_1.Config.apiUrl + "list/" + listId + "/item")
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var itemList = [];
            data.result.forEach(function (item) {
                itemList.push(new item_1.Item(item._id, item.name, item.done));
            });
            return { name: data.name, items: itemList };
        })
            .catch(this.handleErrors);
    };
    ItemService.prototype.add = function (name, listId) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        //console.log("add...", name, listId);
        return this._http.post(config_1.Config.apiUrl + "list/" + listId + "/item", JSON.stringify({
            name: name
        }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            //console.log("add map", data.id, name);
            return new item_1.Item(data.id, name, false);
        })
            .catch(this.handleErrors);
    };
    ItemService.prototype.done = function (id, listId, done) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.put(config_1.Config.apiUrl + "list/" + listId + "/item/" + id, JSON.stringify({
            done: done
        }), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    ItemService.prototype.delete = function (id, listId) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.delete(config_1.Config.apiUrl + "list/" + listId + "/item/" + id, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    ItemService.prototype.handleErrors = function (error) {
        //console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    ItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map