import { Component, NgModule } from '@angular/core';

import {HttpModule, Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';

import {CompanyComponent} from './admin/company/company.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    AppComponent,
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
    AppComponent,
    CompanyComponent
  ]
  })

export class AppComponent {
  pathSelected = 'Home';
    onNavigate(linkSelected: string) {
       this.pathSelected = linkSelected;
    }
}
