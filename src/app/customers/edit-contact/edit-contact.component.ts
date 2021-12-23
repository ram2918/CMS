import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { MustMatch } from 'src/app/_helpers/must-match.validators';
import { CUSTOMERLISTS } from '../customerList';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  editCustomer:FormGroup;
  paramSubsciption:Subscription;
 contactId:number;
 data:Customer;
  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    
    private router:Router,) { }

 async  ngOnInit() {

  this.paramSubsciption =this.route.params.subscribe(async (params:Params )=>{
    this.contactId =params['contactId'];
       });
  this.editCustomer = this.formBuilder.group({
    type:['',Validators.required],
    title: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue],
    Phone:['', [Validators.required, Validators.pattern("^[0-9]*$"),
    Validators.minLength(8)]]
}, {
    validator: MustMatch('password', 'confirmPassword')
});

await this.getEditData()
}

getEditData(){
  for (let data of CUSTOMERLISTS) {
    if(data.contact_id ==this.contactId){
      this.data = data
    }
  }
 // type:this.data.contact_type,
  //title:this.data.salutation,
this.editCustomer.get('title').setValue(this.data.salutation);

this.editCustomer.get('type').setValue(this.data.contact_type);
  this.editCustomer.patchValue({
    firstName:this.data.first_name,
    lastName:this.data.last_name,
    email:this.data.email,
    Phone:this.data.company_name,
  })  
}

viewButton(){
  this.router.navigate(['/editCustomer/'+this.contactId],)
}
onSubmit(){

}
}
