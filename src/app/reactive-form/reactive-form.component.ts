import { Component } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// angular material
import { MatSlideToggleModule } from "@angular/material/slide-toggle"
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatSlideToggleModule, MatInputModule],
  templateUrl: './reactive-form.component.pug',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  fb: FormBuilder = new FormBuilder();

  htmlForm: FormGroup = this.fb.group({
    firstName: ["", ],
    lastName: ["", [Validators.minLength(2)]],
    email: ["", [Validators.email, Validators.minLength(2)]]
  });

  ngOnInit() {
    // console.log("The component has loaded.")
    // console.log(this.htmlForm.value)

    // Init form values
    // this.htmlForm.setValue({ ...this.htmlForm.value, firstName: "Cookieeeeee"})

    // subscribe the form value changes
    this.htmlForm.valueChanges.subscribe(data => {
      console.log(data);
    })
  }

  handleHtmlFormSubmit() {
    
    // console.log(this.htmlForm.valid);
    console.log("HTML Form submitted");
    this.htmlForm.setValue(this.htmlForm.value)
  }

  overrideForm() {
    // this.htmlForm.value.firstName = "Cookie";
    // this.htmlForm.value.lastName = "Coo";
    // this.htmlForm.value.email = "cookie@cat.com"
    // console.log(this.htmlForm.value);

    // this.htmlForm.setValue({
    //   firstName: "Cookie",
      // lastName: "Coo",
      // email: "cookie@cat.com"
    // })

    this.htmlForm.patchValue({
      firstName: "Patch patch",
      email: "cookie@example.com"
    })
  }
}
