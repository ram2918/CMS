
import {DecimalPipe} from '@angular/common';
import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Observable} from 'rxjs';
import {Customer} from '../models/customer.model';
import {CustomerService} from './customers.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';
import {CUSTOMERLISTS} from './customerList';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[DecimalPipe]
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Customer[]>;
  total$: Observable<number>;
  filtered;
searchText;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  public searchFilter: any = '';
  query:any;
  constructor(public service: CustomerService,private pipe: DecimalPipe) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
   
   }
   dataSource = new MatTableDataSource(  CUSTOMERLISTS  );

  ngOnInit(): void {
  
    }
  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  applyFilter() {
    let data =[];
    
 //   this.filtered = this.customers$.filter((invoice) => this.isMatch(invoice));
  }
  isMatch(item) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item[k]));
    } else {
      return item.toString().indexOf(this.searchFilter) > -1
    }
  }
}
