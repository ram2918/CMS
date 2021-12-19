import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  public searchText: any = '';
  constructor() { }
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
  ngOnInit(): void {
  }
  downloadPDF(){

  }
  async Export() {
    return new Promise((resolve, reject) => {
    
          const date = new Date();
          const fileName = `Contact_Data${date.getFullYear()}-${date.getMonth()}-${date.getDate()}_${String(date.getHours() - 12).padStart(2, '0')}${String(date.getMinutes()).padStart(2, '0')}${String(date.getSeconds()).padStart(2, '0')}.xlsx`;
          const sheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataCustomer);
          const workBook: XLSX.WorkBook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workBook, sheet, 'sheet1');
          XLSX.writeFile(workBook, fileName);
    });
  }
}

