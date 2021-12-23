import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { MustMatch } from '../../_helpers/must-match.validators';
import {CUSTOMERLISTS} from '../customerList';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private fromBuilder:FormBuilder,private route:ActivatedRoute,
    private router:Router
    ) { }
  editCustomer:FormGroup;
  paramSubsciption:Subscription;
  contactId:number;
  viewStudent:boolean;
viewData :Customer;
 async ngOnInit() {
    this.paramSubsciption =this.route.params.subscribe(async (params:Params )=>{
     this.contactId =params['contactId'];

      await  this.getViewData()
    console.log(this.viewData);
    this.viewStudent =true;
     
    await  this.getViewData()
    console.log(this.viewData);
    
  
    })

   
  }
  getViewData(){

    for (let data of CUSTOMERLISTS) {
      if(data.contact_id ==this.contactId){
        this.viewData = data
      }
    }
  
  }
  editButton(){
    this.router.navigate(['customer/editContact/'+this.contactId])
  }
  
}
