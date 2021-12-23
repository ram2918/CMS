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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {DecimalPipe} from '@angular/common';
import { SearchFilterPipe } from './custom.filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdSortableHeader } from './customers/sortable.directive';
import { ArchwizardModule } from 'angular-archwizard';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { EditContactComponent } from './customers/edit-contact/edit-contact.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    EditCustomerComponent,
    EditContactComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,Ng2SearchPipeModule,
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
  providers: [DecimalPipe,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
