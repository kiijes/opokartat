import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()

export class PagesService {

  pageContentName: any;
  subContentName: any;
  private url = 'http://localhost:3000/api/v1/pages';

  constructor(
    private http: HttpClient
  ) {
      this.http.get(this.url).subscribe(data => {
      })
  }

  getPages() {
      return this.http.get(this.url);
  }
  setSelectedPageContent(contentName, index) {
    this.pageContentName = {name: contentName, index: index};
  }
  getSelectedPageContent() {
    if (this.pageContentName != null || this.pageContentName != undefined)
      return this.pageContentName;
    else
      return {name: "Aloita valitsemalla sivu"}
  }

  setSelectedSubContent(contentName, index) {
    this.subContentName = {name: contentName, index: index};
  }
  getSelectedSubContent() {
    if (this.subContentName != null || this.subContentName != undefined)
      return this.subContentName;
    else
      return {name: ""}
  }
}
