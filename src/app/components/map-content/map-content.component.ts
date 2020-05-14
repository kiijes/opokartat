import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-map-content',
  templateUrl: './map-content.component.html',
  styleUrls: ['./map-content.component.css']
})
export class MapContentComponent implements OnInit {

  pageData;
  pageContent = [];
  pageName: string;
  pageIndex: number;

  subName: string;
  subIndex: number;

  constructor(private route: ActivatedRoute, private pagesService: PagesService) {
    this.pagesService.getPages().subscribe((data: any[])=>{
          this.pageData = data;
          this.pageContent = data;
      });
    }

  ngOnInit() {
    this.getSelectedPageContentFromService();
    this.getSelectedSubContentFromService();
  }

  getSelectedPageContentFromService() {
      this.pageName = this.pagesService.getSelectedPageContent().name;
      this.pageIndex = this.pagesService.getSelectedPageContent().index;
  }

  setSubContent(contentName, index) {
    this.pagesService.setSelectedSubContent(contentName, index);
    this.getSelectedSubContentFromService();
  }
  getSelectedSubContentFromService() {
      this.subName = this.pagesService.getSelectedSubContent().name;
      this.subIndex = this.pagesService.getSelectedSubContent().index;
  }
}
