import { Component, OnInit, NgModule, EventEmitter } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';


import 'rxjs/add/operator/map';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [
    CompanyComponent
  ]
})
@NgModule({

imports: [
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
private companyDetailsListurl = 'http://tomcat.dev.dev1.scheduler.prod.walmart.com:8080/scheduler/rest/companies';

companyList: any = {};

constructor(private http: Http) {
this.getCompanyList();
this.getData();

 }

 getData() {

  return this.http.get(this.companyDetailsListurl)
  .map((res: Response) => res.json());
}

getCompanyList() {
return this.getData().subscribe(
  companyList => {
    console.log('Company Details List received ' + companyList);
    this.companyList = companyList;
  });
}


  ngOnInit() {
    console.log('Company is clicked');
  }

}
