export interface Customer {
    contact_id:number;
    contact_name:string;
    company_name:string;
    contact_type:string;
    status:string;
    payment_terms:number;
    payment_terms_label:string;
    currency_id:number;
    currency_code:string;
    outstanding_receivable_amount:number;
    unused_credits_receivable_amount:number;
    first_name:string;
    last_name:string;
    email:string;
    phone:string;
    mobile:string;
    created_time:string;
    last_modified_time:string;
}

export class DeleteCustomer {
    contact_id: number;
    index: number;
  }