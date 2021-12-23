import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { EditContactComponent } from './customers/edit-contact/edit-contact.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryChallansComponent } from './delivery-challans/delivery-challans.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ItemsComponent } from './items/items.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
//  { path: "dashboard", component: DashboardComponent },
  { path: "customers", component: CustomersComponent },
  { path: "addcustomer", component: AddCustomerComponent },
  { path: "editCustomer/:contactId", component: EditCustomerComponent },
//  { path: "editContact/:contactId", component: EditContactComponent },
  { path: "items", component: ItemsComponent },
  { path: "deliveryChallans", component: DeliveryChallansComponent },
  { path: "invoices", component: InvoicesComponent },
  { path: "reports", component: ReportsComponent },
  { path: 'customer',
        children: [
            { path: 'addcustomer', component: AddCustomerComponent },
            { path: 'editContact/:contactId', component: AddCustomerComponent },
        ]},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
