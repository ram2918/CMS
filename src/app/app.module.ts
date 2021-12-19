import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { ItemsComponent } from './items/items.component';
import { DeliveryChallansComponent } from './delivery-challans/delivery-challans.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ReportsComponent } from './reports/reports.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './customers/delete-customer/delete-customer.component';

import {DecimalPipe} from '@angular/common';
import { SearchFilterPipe } from './custom.filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdSortableHeader } from './customers/sortable.directive';
import { ArchwizardModule } from 'angular-archwizard';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    DashboardComponent,
    CustomersComponent,
    ItemsComponent,
    DeliveryChallansComponent,
    InvoicesComponent,
    ReportsComponent,
     NgbdSortableHeader ,
    AddCustomerComponent,
    DeleteCustomerComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialModule,
    ArchwizardModule,
  
    NgbModule,
  //  NgChartsModule
  NgxChartsModule

  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
