import {Injectable} from "@angular/core";
import {Subject}    from 'rxjs/Subject';

@Injectable()
export class AppService {
  private currentPage: string = "login";
  private pageMeta: any = {};

  private _pageDespatchSource = new Subject<any>();

  pageDespatchSource$ = this._pageDespatchSource.asObservable();

  public broadcastPageChange(page: string, pageMeta: Object) {
    this._pageDespatchSource.next({page: page, pageMeta: pageMeta});
  }

  public setPage(pageName: string, pageMeta: Object) {
    this.currentPage = pageName;
    this.pageMeta = pageMeta;

    this.broadcastPageChange(this.currentPage, this.pageMeta);
  }

  public getPage() {
    return this.currentPage;
  }

  public getPageMeta() {
    return this.pageMeta;
  }
}