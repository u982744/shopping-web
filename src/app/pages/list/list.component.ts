import {Component, ElementRef, OnInit, ViewChild, NgZone} from "@angular/core";
import {List} from "../../shared/list/list";
import {ListService} from "../../shared/list/list.service";
import {ItemList} from "../item-list.component";
import {AppService} from "../../app.service";
import {ActivityIndicator} from "../../components/activity-indicator.component";

@Component({
  selector: "page-list",
  templateUrl: "app/pages/list/list.html",
  styleUrls: ["app/pages/list/list.css"],
  directives : [ItemList, ActivityIndicator],
  providers: [ListService]
})

export class ListPage implements OnInit {
  lists: Array<List> = [];
  list: string = "";
  isLoading = false;
  listLoaded = false;

  constructor(
    private _appService: AppService,
    private _listService: ListService,
    private _zone: NgZone
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this._listService.load()
      .subscribe(loadedLists => {
        loadedLists.forEach((listObject) => {
          this.lists.unshift(listObject);
        });
        this.isLoading = false;
        this.listLoaded = true;
        //console.log("lists", this.lists);
      });
  }

  view(list: List) {
    //console.log("view list...", list);
    this._appService.setPage("items", {listId: list.id});
  }

  hideLoadingIndicator() {
    this.isLoading = false;
  }

  add() {
    //console.log("add list...", this.list);
    this._listService.add(this.list)
      .subscribe(
        listObject => {
          this._zone.run(() => {
            this.list = "";
            this.lists.unshift(listObject);
          });
        },
        () => {
          alert("An error occurred while adding an item to your list.");
        }
      )
  }

  back() {
    this._appService.setPage("login", {});
  }

  delete(item) {
    //console.log("delete list...", item);
    this._listService.delete(item.id)
      .subscribe(
        responseSuccess => {
          // Running the change detection in a zone ensures that change
          // detection gets triggered if needed.
          this._zone.run(() => {
            this.lists.splice(item.index, 1);
          });
        },
        () => {
          this._zone.run(() => {
            this.lists.splice(item.index, 1);
          });
          // for some reason this works but is throwing an error...
          //alert("An error occurred while deleting an item from your list.");
        }
      )
  }
}