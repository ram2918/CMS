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
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
  async ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Executive Dashboard',
   
    };
  await this.sampleChart();
  }
  options: any;
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sampleChart(){
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: (idx) => idx * 10,
        },
        {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: (idx) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }
}
 

