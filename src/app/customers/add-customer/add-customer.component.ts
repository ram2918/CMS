import { Component, OnInit, ViewChild } from '@angular/core';
;
import { MustMatch } from '../../_helpers/must-match.validators';
export interface Subject {
  name: string;
}
import {FormGroup,FormControl,Validators,FormArray, FormBuilder} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CUSTOMERLISTS } from '../customerList';
import { Customer } from 'src/app/models/customer.model';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  contactForm: FormGroup;
  paramSubsciption:Subscription;
  submitted = false;
  contactDetails =
   [{ salutation: null, name: null,emailAddress: null, }];
  contactId:number;
  data:Customer;
  editData :boolean;
  saveBtn:string;
  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,  private router:Router) { }
async  ngOnInit() {
    this.contactForm = this.formBuilder.group({
        type:['',Validators.required],
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: ['', Validators.required],
        pan: ['', Validators.required],
        currency: ['', Validators.required],
        paymentTerms: ['', Validators.required],
        enablePortal: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        remarks: ['', Validators.required],       
        Phone:['', [Validators.required, Validators.pattern("^[0-9]*$"),
        Validators.minLength(8)]]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });

    this.paramSubsciption =this.route.params.subscribe(async (params:Params )=>{
      this.contactId =params['contactId'];

      if(this.contactId){
        await this.getEditData()
        this.contactForm.get('password').disable();
        this.contactForm.get('confirmPassword').disable();
      
        this.editData =true;
        this.saveBtn ="Update";
      }else
        { 
          this.saveBtn ="Save";
         this.editData =false;
         }

         });      

    
}
  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log(this.contactForm.value);

    // stop here if form is invalid

    if (this.contactForm.invalid) {
        return;
    }
    const editData:any ={};
    editData.contact_type =this.contactForm.get("type").value;
    editData.salutation =this.contactForm.get("title").value;
    editData.first_name =this.contactForm.get("firstName").value;
    editData.last_name =this.contactForm.get("lastName").value;
    editData.email =this.contactForm.get("email").value;
//    editData.name =this.contactForm.get("password").value;
//    editData.name =this.contactForm.get("confirmPassword").value;
    editData.acceptTerms =this.contactForm.get("acceptTerms").value;
    editData.pan =this.contactForm.get("pan").value;
    editData.currency =this.contactForm.get("currency").value;
    editData.payment_terms =this.contactForm.get("paymentTerms").value;
    editData.enablePortal =this.contactForm.get("enablePortal").value;
    editData.address =this.contactForm.get("address").value;
    editData.city =this.contactForm.get("city").value;
    editData.remarks =this.contactForm.get("remarks").value;
    editData.phone =this.contactForm.get("Phone").value;
  editData.otherContact =[];
  for (const iterator of this.contactDetails) {
    editData.otherContact.push(iterator)
  }
    if(this.editData){
    editData.contact_id =this.contactId;

      for (let index = 0; index < CUSTOMERLISTS.length; index++) {
        if(CUSTOMERLISTS[index].contact_id ==this.contactId){
         CUSTOMERLISTS.splice(index, 1);
         CUSTOMERLISTS.push(editData);
         
       }
        
      }
  this.router.navigate(['/editCustomer/'+this.contactId],)
    

    }else{
      editData.contact_id =Math.floor(100000 + Math.random() * 900000);

      CUSTOMERLISTS.push(editData);

  this.router.navigate(['/customers'])

    }
  
}

onReset() {
    this.submitted = false;
    this.contactForm.reset();
}


AddcontactDetails() {
  this.contactDetails.push({ salutation: null, name: null,emailAddress: null});
}

DeleteContactDetails(i) {
  this.contactDetails.splice(i, 1);
}

getEditData(){
  for (let data of CUSTOMERLISTS) {
    if(data.contact_id ==this.contactId){
      this.data = data
    }
  }
 // type:this.data.contact_type,
  //title:this.data.salutation,
this.contactForm.get('title').setValue(this.data.salutation);

this.contactForm.get('acceptTerms').setValue(this.data.salutation);

this.contactForm.get('type').setValue(this.data.contact_type);
  this.contactForm.patchValue({
    firstName:this.data.first_name,
    lastName:this.data.last_name,
    email:this.data.email,
    Phone:this.data.phone,
    pan:this.data.pan,
    currency:this.data.currency,
    paymentTerms:this.data.payment_terms,
    enablePortal:this.data.enablePortal,
    address:this.data.address,
    city:this.data.city,
    remarks:this.data.remarks,
  })  

 if(this.data.otherContact &&this.data.otherContact.length>0){
   this.contactDetails =this.data.otherContact;
 }
}

viewButton(){
  this.router.navigate(['/editCustomer/'+this.contactId],)
}
}
