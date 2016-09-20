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
var ItemList = (function () {
    function ItemList() {
        this.items = [];
        this.loaded = new core_1.EventEmitter();
        this.doneOutput = new core_1.EventEmitter();
        this.viewOutput = new core_1.EventEmitter();
        this.deleteOutput = new core_1.EventEmitter();
    }
    ItemList.prototype.ngOnInit = function () {
        this.loaded.emit("loaded");
        //console.log("ItemList items", this.items);
    };
    ItemList.prototype.imageSource = function (item) {
        return item.done ? "./app/assets/images/checked.png" : "./app/assets/images/unchecked.png";
    };
    ItemList.prototype.toggleDone = function (item) {
        if (this.isDoneable) {
            item.done = !item.done;
            //console.log("emit done", item);
            this.doneOutput.emit(item);
        }
    };
    ItemList.prototype.view = function (item) {
        if (this.isViewable) {
            //console.log("emit view", item);
            this.viewOutput.emit(item);
        }
    };
    ItemList.prototype.delete = function (item) {
        //console.log("emit delete", item);
        this.deleteOutput.emit(item);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemList.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemList.prototype, "isViewable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemList.prototype, "isDoneable", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemList.prototype, "loaded", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemList.prototype, "doneOutput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemList.prototype, "viewOutput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemList.prototype, "deleteOutput", void 0);
    ItemList = __decorate([
        core_1.Component({
            selector: "item-list",
            template: "\n    <ul>\n      <li \n        *ngFor=\"let item of items\">\n        <img\n          *ngIf=\"isDoneable\"\n          [src]=\"imageSource(item)\"\n          (click)=\"toggleDone(item)\">\n        <span\n          [class.done]=\"item.done\">{{ item.name }}</span>\n        <button class=\"view\"\n          *ngIf=\"isViewable\"\n          (click)=\"view(item)\">VIEW</button>\n        <button\n          (click)=\"delete(item)\">&times;</button>\n      </li>\n    </ul>\n  ",
            styleUrls: ["./app/pages/item-list.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], ItemList);
    return ItemList;
}());
exports.ItemList = ItemList;
//# sourceMappingURL=item-list.component.js.map