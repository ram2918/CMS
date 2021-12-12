import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryChallansComponent } from './delivery-challans/delivery-challans.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ItemsComponent } from './items/items.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "customers", component: CustomersComponent },
  { path: "items", component: ItemsComponent },
  { path: "deliveryChallans", component: DeliveryChallansComponent },
  { path: "invoices", component: InvoicesComponent },
  { path: "reports", component: ReportsComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
