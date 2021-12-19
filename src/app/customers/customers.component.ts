
import {DecimalPipe} from '@angular/common';
import {Component, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Observable} from 'rxjs';
import {Customer,DeleteCustomer} from '../models/customer.model';
import {CustomerService} from './customers.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';
import {CUSTOMERLISTS} from './customerList';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  constructor(public service: CustomerService,private pipe: DecimalPipe, private modalService: NgbModal) {
    this.customers$ = service.customers$;
    this.total$ = service.total$;
   
   }
   dataCustomer =[
    { 
      "contact_id": 460000000026049,
 "contact_name": "Ram",
 "company_name": "Ram Tech",
 "contact_type": "customer",
 "status": "active",
 "payment_terms": 15,
 "payment_terms_label": "Net 15",
 "currency_id": 460000000000097,
 "currency_code": "USD",
 "outstanding_receivable_amount": 250,
 "unused_credits_receivable_amount": 1369.66,
 "first_name": "Will",
 "last_name": "Smith",
 "email": "test@zylker.org",
 "phone": "1234",
 "mobile": "1234",
 "created_time": "2013-10-07T12:06:10+0530",
 "last_modified_time": "2013-11-08T18:24:51+0530"
}, { 
 "contact_id": 460000000026049,
"contact_name": "Bowman and Co",
"company_name": "Bowman and Co",
"contact_type": "customer",
"status": "active",
"payment_terms": 15,
"payment_terms_label": "Net 15",
"currency_id": 460000000000097,
"currency_code": "USD",
"outstanding_receivable_amount": 250,
"unused_credits_receivable_amount": 1369.66,
"first_name": "Will",
"last_name": "Smith",
"email": "test@zylker.org",
"phone": "1234",
"mobile": "1234",
"created_time": "2013-10-07T12:06:10+0530",
"last_modified_time": "2013-11-08T18:24:51+0530"
}, { 
 "contact_id": 460000000026049,
"contact_name": "Bowman and Co",
"company_name": "Bowman and Co",
"contact_type": "customer",
"status": "active",
"payment_terms": 15,
"payment_terms_label": "Net 15",
"currency_id": 460000000000097,
"currency_code": "USD",
"outstanding_receivable_amount": 250,
"unused_credits_receivable_amount": 1369.66,
"first_name": "Will",
"last_name": "Smith",
"email": "test@zylker.org",
"phone": "1234",
"mobile": "1234",
"created_time": "2013-10-07T12:06:10+0530",
"last_modified_time": "2013-11-08T18:24:51+0530"
}, { 
 "contact_id": 460000000026049,
"contact_name": "Bowman and Co",
"company_name": "Bowman and Co",
"contact_type": "customer",
"status": "active",
"payment_terms": 15,
"payment_terms_label": "Net 15",
"currency_id": 460000000000097,
"currency_code": "USD",
"outstanding_receivable_amount": 250,
"unused_credits_receivable_amount": 1369.66,
"first_name": "Will",
"last_name": "Smith",
"email": "test@zylker.org",
"phone": "1234",
"mobile": "1234",
"created_time": "2013-10-07T12:06:10+0530",
"last_modified_time": "2013-11-08T18:24:51+0530"
}, {  
 "contact_id": 460000000026049,
"contact_name": "Bowman and Co",
"company_name": "Bowman and Co",
"contact_type": "customer",
"status": "active",
"payment_terms": 15,
"payment_terms_label": "Net 15",
"currency_id": 460000000000097,
"currency_code": "USD",
"outstanding_receivable_amount": 250,
"unused_credits_receivable_amount": 1369.66,
"first_name": "Will",
"last_name": "Smith",
"email": "test@zylker.org",
"phone": "1234",
"mobile": "1234",
"created_time": "2013-10-07T12:06:10+0530",
"last_modified_time": "2013-11-08T18:24:51+0530"
}, { 
 "contact_id": 460000000026049,
"contact_name": "Bowman and Co",
"company_name": "Bowman and Co",
"contact_type": "customer",
"status": "active",
"payment_terms": 15,
"payment_terms_label": "Net 15",
"currency_id": 460000000000097,
"currency_code": "USD",
"outstanding_receivable_amount": 250,
"unused_credits_receivable_amount": 1369.66,
"first_name": "Will",
"last_name": "Smith",
"email": "test@zylker.org",
"phone": "1234",
"mobile": "1234",
"created_time": "2013-10-07T12:06:10+0530",
"last_modified_time": "2013-11-08T18:24:51+0530"
}, { 
 "contact_id": 460000000026049,
"contact_name": "Bowman and Co",
"company_name": "Bowman and Co",
"contact_type": "customer",
"status": "active",
"payment_terms": 15,
"payment_terms_label": "Net 15",
"currency_id": 460000000000097,
"currency_code": "USD",
"outstanding_receivable_amount": 250,
"unused_credits_receivable_amount": 1369.66,
"first_name": "Will",
"last_name": "Smith",
"email": "test@zylker.org",
"phone": "1234",
"mobile": "1234",
"created_time": "2013-10-07T12:06:10+0530",
"last_modified_time": "2013-11-08T18:24:51+0530"
}]
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
}
