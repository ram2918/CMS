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
    salutation:string;
    remarks:string;
    pan:string;
    enablePortal:string;
    currency:string;
    paymentTerms:string;
    address:string;
    city:string;
    otherContact:otherContact[];
    acceptTerms:boolean;


}
export class otherContact {
    salutation:string;
    name:string;
    emailAddress:string;
}
export class DeleteCustomer {
    contact_id: number;
    index: number;
  }