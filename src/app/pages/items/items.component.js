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
var item_service_1 = require("../../shared/item/item.service");
var item_list_component_1 = require("../item-list.component");
var list_service_1 = require("../../shared/list/list.service");
var email_validator_1 = require("email-validator");
var app_service_1 = require("../../app.service");
var activity_indicator_component_1 = require("../../components/activity-indicator.component");
var ItemsPage = (function () {
    function ItemsPage(_appService, _itemService, _listService, _zone) {
        this._appService = _appService;
        this._itemService = _itemService;
        this._listService = _listService;
        this._zone = _zone;
        this.itemList = [];
        this.item = "";
        this.email = "";
        this.isLoading = false;
        this.listLoaded = false;
        this.showShare = false;
        this.listName = "";
    }
    ItemsPage.prototype.ngOnInit = function () {
        var _this = this;
        //console.log("ItemsPage ngOnInit");
        this.isLoading = true;
        this._listId = this._appService.getPageMeta().listId;
        this._itemService.load(this._listId)
            .subscribe(function (response) {
            _this.listName = response.name;
            response.items.forEach(function (itemObject) {
                _this.itemList.unshift(itemObject);
            });
            //////console.log(this.itemList);
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ItemsPage.prototype.hideLoadingIndicator = function () {
        this.isLoading = false;
    };
    ItemsPage.prototype.back = function () {
        this._appService.setPage("list", {});
    };
    ItemsPage.prototype.shareToggle = function () {
        var _this = this;
        //////console.log("do shareToggle");
        this._zone.run(function () {
            _this.showShare = !_this.showShare;
        });
    };
    ItemsPage.prototype.toggleDone = function (item) {
        //////console.log("items.component toggleDone", item);
        this._itemService.done(item.id, this._listId, item.done)
            .subscribe(function (responseSuccess) { }, function () {
            alert("An error occurred changing the done status of an item in your list.");
        });
    };
    ItemsPage.prototype.share = function () {
        //////console.log("do share...");
        var _this = this;
        if (!email_validator_1.validate(this.email)) {
            alert("Enter a valid email address.");
            return;
        }
        this._listService.share(this._listId, this.email)
            .subscribe(function (response) {
            alert(response.message);
            if (response.success) {
                _this._zone.run(function () {
                    _this.email = "";
                });
            }
        }, function (error) {
            //////console.log("error", error);
            alert("An error occurred sharing your list.");
        });
    };
    ItemsPage.prototype.add = function () {
        var _this = this;
        this._itemService.add(this.item, this._listId)
            .subscribe(function (itemObject) {
            // Running the change detection in a zone ensures that change
            // detection gets triggered if needed.
            _this._zone.run(function () {
                _this.item = "";
                _this.itemList.unshift(itemObject);
            });
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
        });
    };
    ItemsPage.prototype.delete = function (item) {
        var _this = this;
        this._itemService.delete(item.id, this._listId)
            .subscribe(function (responseSuccess) {
            // Running the change detection in a zone ensures that change
            // detection gets triggered if needed.
            _this._zone.run(function () {
                _this.itemList.splice(item.index, 1);
            });
        }, function () {
            _this._zone.run(function () {
                _this.itemList.splice(item.index, 1);
            });
            // for some reason this works but is throwing an error...
            //alert("An error occurred while deleting an item from your list.");
        });
    };
    ItemsPage = __decorate([
        core_1.Component({
            selector: "page-items",
            templateUrl: "app/pages/items/items.html",
            styleUrls: ["app/pages/items/items.css"],
            directives: [item_list_component_1.ItemList, activity_indicator_component_1.ActivityIndicator],
            providers: [item_service_1.ItemService, list_service_1.ListService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, item_service_1.ItemService, list_service_1.ListService, core_1.NgZone])
    ], ItemsPage);
    return ItemsPage;
}());
exports.ItemsPage = ItemsPage;
//# sourceMappingURL=items.component.js.map