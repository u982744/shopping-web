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
var list_service_1 = require("../../shared/list/list.service");
var item_list_component_1 = require("../item-list.component");
var app_service_1 = require("../../app.service");
var activity_indicator_component_1 = require("../../components/activity-indicator.component");
var ListPage = (function () {
    function ListPage(_appService, _listService, _zone) {
        this._appService = _appService;
        this._listService = _listService;
        this._zone = _zone;
        this.lists = [];
        this.list = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this._listService.load()
            .subscribe(function (loadedLists) {
            loadedLists.forEach(function (listObject) {
                _this.lists.unshift(listObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
            //console.log("lists", this.lists);
        });
    };
    ListPage.prototype.view = function (list) {
        //console.log("view list...", list);
        this._appService.setPage("items", { listId: list.id });
    };
    ListPage.prototype.hideLoadingIndicator = function () {
        this.isLoading = false;
    };
    ListPage.prototype.add = function () {
        var _this = this;
        //console.log("add list...", this.list);
        this._listService.add(this.list)
            .subscribe(function (listObject) {
            _this._zone.run(function () {
                _this.list = "";
                _this.lists.unshift(listObject);
            });
        }, function () {
            alert("An error occurred while adding an item to your list.");
        });
    };
    ListPage.prototype.back = function () {
        this._appService.setPage("login", {});
    };
    ListPage.prototype.delete = function (item) {
        var _this = this;
        //console.log("delete list...", item);
        this._listService.delete(item.id)
            .subscribe(function (responseSuccess) {
            // Running the change detection in a zone ensures that change
            // detection gets triggered if needed.
            _this._zone.run(function () {
                _this.lists.splice(item.index, 1);
            });
        }, function () {
            _this._zone.run(function () {
                _this.lists.splice(item.index, 1);
            });
            // for some reason this works but is throwing an error...
            //alert("An error occurred while deleting an item from your list.");
        });
    };
    ListPage = __decorate([
        core_1.Component({
            selector: "page-list",
            templateUrl: "app/pages/list/list.html",
            styleUrls: ["app/pages/list/list.css"],
            directives: [item_list_component_1.ItemList, activity_indicator_component_1.ActivityIndicator],
            providers: [list_service_1.ListService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, list_service_1.ListService, core_1.NgZone])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=list.component.js.map