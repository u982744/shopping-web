import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Item} from "../shared/item/item";

@Component({
  selector: "item-list",
  template: `
    <ul>
      <li 
        *ngFor="let item of items">
        <img
          *ngIf="isDoneable"
          [src]="imageSource(item)"
          (click)="toggleDone(item)">
        <span
          [class.done]="item.done">{{ item.name }}</span>
        <button class="view"
          *ngIf="isViewable"
          (click)="view(item)">VIEW</button>
        <button
          (click)="delete(item)">&times;</button>
      </li>
    </ul>
  `,
  styleUrls: ["./app/pages/item-list.css"]
})
export class ItemList implements OnInit {
  @Input() items = [];
  @Input() isViewable;
  @Input() isDoneable;

  @Output() loaded = new EventEmitter();
  @Output() doneOutput = new EventEmitter();
  @Output() viewOutput = new EventEmitter();
  @Output() deleteOutput = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.loaded.emit("loaded");
    //console.log("ItemList items", this.items);
  }

  imageSource(item) {
    return item.done ? "./app/assets/images/checked.png" : "./app/assets/images/unchecked.png";
  }

  toggleDone(item: Item) {
    if (this.isDoneable) {
      item.done = !item.done;
      //console.log("emit done", item);
      this.doneOutput.emit(item);
    }
  }

  view(item: Item) {
    if (this.isViewable) {
      //console.log("emit view", item);
      this.viewOutput.emit(item);
    }
  }

  delete(item: Item) {
    //console.log("emit delete", item);
    this.deleteOutput.emit(item);
  }
}
