import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  name: Number;
  position: string;
  weight: Number;
  symbol: Number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: "Today", name: 1.0079, weight: 1.0079, symbol: 1.0079},
  {position: "This Week", name: 4.0026, weight: 4.0026, symbol: 4.0026},
  {position: "This Month", name: 6.941, weight: 6.941, symbol: 6.941},
  {position: "This Quarter", name: 9.0122, weight: 9.0122, symbol: 9.0122},
  {position: "This year", name: 10.811, weight: 10.811, symbol: 10.811},
  
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public breadcrumb: any;
  displayedColumns: string[] = ['Weeks', 'Sales', 'Receipts', 'Due'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  async ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Executive Dashboard',
   
    };
  
  }
  options: any;
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
