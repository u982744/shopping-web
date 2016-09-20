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
var ItemInputView = (function () {
    function ItemInputView(_zone) {
        this._zone = _zone;
        this.typeName = "item";
        this.addOutput = new core_1.EventEmitter();
    }
    ItemInputView.prototype.add = function () {
        if (this.value.trim() === "") {
            alert("Enter an " + this.typeName);
            return;
        }
        // Dismiss the keyboard
        this._zone.run(function () {
            //let textField = <TextField>this.itemTextField.nativeElement;
            //textField.dismissSoftInput();
        });
        this.addOutput.emit(this.value);
        this.value = "";
    };
    __decorate([
        core_1.ViewChild("itemTextField"), 
        __metadata('design:type', core_1.ElementRef)
    ], ItemInputView.prototype, "itemTextField", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ItemInputView.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ItemInputView.prototype, "hint", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ItemInputView.prototype, "typeName", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemInputView.prototype, "addOutput", void 0);
    ItemInputView = __decorate([
        core_1.Component({
            selector: "item-input",
            template: "\n    <TextField class=\"input-box\" #itemTextField [(ngModel)]=\"value\" hint=\"{{ hint }}\" col=\"0\"></TextField>\n    <Image src=\"res://add\" (tap)=\"add()\" col=\"1\"></Image>\n  ",
            styles: ["\n    .input-box {\n        font-size: 16;\n    }\n  "],
            providers: []
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], ItemInputView);
    return ItemInputView;
}());
exports.ItemInputView = ItemInputView;
//# sourceMappingURL=item-input.component.js.map