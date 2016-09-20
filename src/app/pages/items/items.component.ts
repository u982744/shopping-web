import {Component, ElementRef, OnInit, ViewChild, NgZone, AfterViewInit} from "@angular/core";
import {Item} from "../../shared/item/item";
import {ItemService} from "../../shared/item/item.service";
import {ItemList} from "../item-list.component";
import {ListService} from "../../shared/list/list.service";
import {validate} from "email-validator";
import {AppService} from "../../app.service";
import {ActivityIndicator} from "../../components/activity-indicator.component";

@Component({
  selector: "page-items",
  templateUrl: "app/pages/items/items.html",
  styleUrls: ["app/pages/items/items.css"],
  directives : [ItemList, ActivityIndicator],
  providers: [ItemService, ListService]
})

export class ItemsPage implements OnInit {
  itemList: Array<Item> = [];
  item: string = "";
  email: string = "";
  isLoading = false;
  listLoaded = false;
  showShare = false;
  public listName: string = "";
  private _paramSubscription: any;
  private _listId: string;

  constructor(
    private _appService: AppService,
    private _itemService: ItemService,
    private _listService: ListService,
    private _zone: NgZone
  ) {}

  ngOnInit() {
    //console.log("ItemsPage ngOnInit");
    this.isLoading = true;

    this._listId = this._appService.getPageMeta().listId;
    this._itemService.load(this._listId)
      .subscribe(response => {
          this.listName = response.name;
          response.items.forEach((itemObject) => {
              this.itemList.unshift(itemObject);
          });

          //////console.log(this.itemList);
          this.isLoading = false;
          this.listLoaded = true;
      });
  }

  hideLoadingIndicator() {
    this.isLoading = false;
  }

  back() {
    this._appService.setPage("list", {});
  }

  shareToggle() {
    //////console.log("do shareToggle");
    this._zone.run(() => {
        this.showShare = !this.showShare;
    });
  }

  toggleDone(item: Item) {
    //////console.log("items.component toggleDone", item);

    this._itemService.done(item.id, this._listId, item.done)
      .subscribe(
        responseSuccess => {},
        () => {
          alert("An error occurred changing the done status of an item in your list.");
        }
      )
  }

  share() {
    //////console.log("do share...");

    if (!validate(this.email)) {
      alert("Enter a valid email address.");
      return;
    }

    this._listService.share(this._listId, this.email)
      .subscribe(
        response => {
          alert(response.message);

          if (response.success) {
            this._zone.run(() => {
                this.email = "";
            });
          }
        },
        (error) => {
          //////console.log("error", error);
          alert("An error occurred sharing your list.");
        }
      )
  }

  add() {
    this._itemService.add(this.item, this._listId)
      .subscribe(
        itemObject => {
            // Running the change detection in a zone ensures that change
            // detection gets triggered if needed.
            this._zone.run(() => {
                this.item = "";
                this.itemList.unshift(itemObject);
            });
        },
        () => {
          alert({
            message: "An error occurred while adding an item to your list.",
            okButtonText: "OK"
          });
        }
      )
  }

  delete(item) {
    this._itemService.delete(item.id, this._listId)
      .subscribe(
        responseSuccess => {
          // Running the change detection in a zone ensures that change
          // detection gets triggered if needed.
          this._zone.run(() => {
            this.itemList.splice(item.index, 1);
          });
        },
        () => {
          this._zone.run(() => {
            this.itemList.splice(item.index, 1);
          });
          // for some reason this works but is throwing an error...
          //alert("An error occurred while deleting an item from your list.");
        }
      )
  }
}