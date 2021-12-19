import { Component, OnInit, ViewChild } from '@angular/core';
;
import { MustMatch } from '../../_helpers/must-match.validators';
export interface Subject {
  name: string;
}
import {FormGroup,FormControl,Validators,FormArray, FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  contactDetails = [{ Salutation: null, name: null,Email: null, }];
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
}
  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.contactForm.reset();
}


AddcontactDetails() {
  this.contactDetails.push({ Salutation: null, name: null,Email: null, });
}

DeleteContactDetails(i) {
  this.contactDetails.splice(i, 1);
}
}
