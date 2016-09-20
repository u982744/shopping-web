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
var ItemView = (function () {
    function ItemView(_zone) {
        this._zone = _zone;
        this.deleteOutput = new core_1.EventEmitter();
        this.viewOutput = new core_1.EventEmitter();
        this.doneOutput = new core_1.EventEmitter();
    }
    ItemView.prototype.delete = function (id, index) {
        this.deleteOutput.emit({ id: id, index: index });
    };
    ItemView.prototype.tap = function (id) {
        var _this = this;
        if (this.isViewable) {
            this.viewOutput.emit(id);
        }
        if (this.isDoneable) {
            this._zone.run(function () {
                _this.item.done = !_this.item.done;
                _this.doneOutput.emit({ id: id, done: _this.item.done });
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemView.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemView.prototype, "isViewable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemView.prototype, "isDoneable", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemView.prototype, "deleteOutput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemView.prototype, "viewOutput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemView.prototype, "doneOutput", void 0);
    ItemView = __decorate([
        core_1.Component({
            selector: "item",
            template: "\n    <GridLayout columns=\"*, auto\" class=\"item\">\n        <Label [ngClass]=\"{'done': item.done}\" [text]=\"item.name\" class=\"medium-spacing\" (tap)=\"tap(item.id)\"></Label>\n        <Label text=\"Delete\" col=\"1\" (tap)=\"delete(item.id, i)\"></Label>\n    </GridLayout>\n  ",
            styleUrls: ["shared/item/item.css"],
            providers: []
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], ItemView);
    return ItemView;
}());
exports.ItemView = ItemView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBYzdFO0lBVUksa0JBQW9CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBSnZCLGlCQUFZLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDbEMsZUFBVSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUVOLENBQUM7SUFFckMseUJBQU0sR0FBTixVQUFPLEVBQUUsRUFBRSxLQUFLO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQkFBRyxHQUFILFVBQUksRUFBRTtRQUFOLGlCQVdDO1FBVkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUNYLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUF6QkQ7UUFBQyxZQUFLLEVBQUU7OzBDQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O2dEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O2dEQUFBO0lBRVI7UUFBQyxhQUFNLEVBQUU7O2tEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O2dEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O2dEQUFBO0lBcEJiO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSw4UkFLVDtZQUNELFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQzs7Z0JBQUE7SUE4QkYsZUFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QlksZ0JBQVEsV0E0QnBCLENBQUEifQ==