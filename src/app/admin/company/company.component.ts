import { element } from 'protractor';
import { Component, ViewChild, OnInit, NgModule, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';
import {HttpModule, Http, Response} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatTableModule , MatPaginator, MatHeaderRowDef , MatRowDef} from '@angular/material';

import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [
    CompanyComponent
  ]
})
@NgModule({

declarations : [
   BrowserAnimationsModule,
   MatTableModule,
   MatPaginator,
   MatHeaderRowDef ,
   MatRowDef
],

imports: [
  BrowserAnimationsModule,
  MatTableModule,
  MatPaginator,
  HttpModule,
  Http,
  Response
],

providers: [
  CompanyComponent
]

})


export class CompanyComponent implements OnInit {

 title = 'Company List';
 companyFilter = '';
 private companyDetailsListurl = 'http://tomcat.dev.dev1.scheduler.prod.walmart.com:8080/scheduler/rest/companies';

 displayedColumns = ['Company Name', 'Company Description', 'Company Address'];
 displayedColumnsTwo = ['companyName', 'companyDescription', 'companyAddress'];

 companyList: Company[];

 tableDisplay: Company[];

 dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;


    constructor(private http: Http) {
        }

   ngOnInit() {
     //  this.dataSource = new ExampleDataSource(this.companyList, this.paginator);
      this.getCompanyList();
      this.getData();
     this.dataSource = new ExampleDataSource(  this.companyList, this.paginator);

      console.log('Setting the datasource in Init' + this.dataSource);
       console.log('paginator in Init' + this.paginator);
   }

    getData() {

      return this.http.get(this.companyDetailsListurl)
      .map((res: Response) => res.json());
    }

    getCompanyList() {
       return this.getData().subscribe(
          companyList => {
           // console.log('Company Details List received ' + companyList);
            this.companyList = companyList;
            this.tableDisplay = companyList;
            this.dataSource = new ExampleDataSource(companyList, this.paginator);
           });
    }

 onCompanyFilter(event: any) { // without type info
    this.companyFilter = event.target.value ;
    this.tableDisplay = [];
  //  this.companyList = [];
    this.companyList.forEach(elementObject => {
     if (elementObject.companyName.toUpperCase().startsWith( this.companyFilter.toUpperCase())) {
          this.tableDisplay.push(elementObject);
     }
    // console.log(element.companyName);
});

  }
}

export interface Company {
  companyName: string;
  companyDescription: string;
  address1: string;
}



export class ExampleDataSource extends DataSource<any> {

   data: Company[];
   paginator: MatPaginator;
  constructor(private _data: Company[], private _paginator: MatPaginator) {
     super();
     this.data = _data;
     this.paginator = _paginator;
   }

 /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Company[]> {
     ///  return Observable.of(this.data);
 // }


 const displayDataChanges = [this._data, this._paginator.page ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }
  disconnect() {}

}
