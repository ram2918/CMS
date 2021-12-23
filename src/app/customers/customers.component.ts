
import {DecimalPipe} from '@angular/common';
import {Component, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Observable} from 'rxjs';
import {Customer,DeleteCustomer} from '../models/customer.model';
import {CustomerService} from './customers.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';
import {CUSTOMERLISTS} from './customerList';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[DecimalPipe]
})
export class CustomersComponent implements OnInit {
  //customers$: Observable<Customer[]>;
  total$: Observable<number>;
  filtered;
searchText;
deleteUser:DeleteCustomer;
@ViewChild('deletemodal') deletemodal: TemplateRef<any>;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  public searchFilter: any = '';
  query:any;
  customers$:any;

  constructor(public service: CustomerService,
    private router:Router,
    private pipe: DecimalPipe, private modalService: NgbModal) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
   
   }
   dataCustomer =CUSTOMERLISTS;
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
    
   this.filtered = this.dataCustomer.filter((invoice) => this.isMatch(invoice));
  }
  isMatch(item) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item[k]));
    } else {
      return item.toString().indexOf(this.searchFilter) > -1
    }
  }

  OpenUserDeleteModal(id, i) {
    this.deleteUser = { contact_id: id, index: i };
    this.modalService.open(this.deletemodal, {
      windowClass: 'animated fadeInDown',
      backdrop: 'static'
    });
  }
  DeleteCustomer(){
    this.dataCustomer.splice(this.deleteUser.index, 1);
  }
  openEditViewModel(id){
    const params ={
      contactId:id
    }
    
    this.router.navigate(['/editCustomer/'+id],)
  }
}
