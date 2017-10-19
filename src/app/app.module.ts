import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PartnerComponent } from './partner/partner.component';
import { ReportComponent } from './report/report.component';
import { BusinessunitsComponent } from './admin/businessunits/businessunits.component';
import { CompanyComponent } from './admin/company/company.component';
import { NodeComponent } from './admin/node/node.component';
import { SearchDeliveryComponent } from './delivery/search-delivery/search-delivery.component';
import { CreateDeliveryComponent } from './delivery/create-delivery/create-delivery.component';

import {Routes, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';


const appRoutes: Routes = [
  {path: '' , component : DashboardComponent},
  {path: 'Home' , component : DashboardComponent},
  {path: 'Company' , component : CompanyComponent},
  {path: 'BusinessUnit' , component : BusinessunitsComponent},
  {path: 'CreateDelivery' , component : CreateDeliveryComponent},
  {path: 'SearchDelivery' , component : SearchDeliveryComponent},
  {path: 'Node' , component : NodeComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    DashboardComponent,
    DeliveryComponent,
    PartnerComponent,
    ReportComponent,
    BusinessunitsComponent,
    CompanyComponent,
    NodeComponent,
    SearchDeliveryComponent,
    CreateDeliveryComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
