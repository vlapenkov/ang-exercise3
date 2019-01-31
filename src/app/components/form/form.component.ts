import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formSubmitted=false;
  profileForm:FormGroup;
  firstName:FormControl;

 
 
  constructor(private fb:FormBuilder) {

    /*
 this.profileForm = this.fb.group({
  email: [' ', Validators.required ],
  password: [' ', Validators.required ],
  hasCar:true
});
*/

   }

  ngOnInit() {
    this.firstName= new FormControl('fname',[Validators.required]);
    this.profileForm = new FormGroup({
      // в форме будет доступ к контексту через profileForm.controls['firstName'].errors.required      
    //  firstName: new FormControl('fname',[Validators.required]),


    // в форме прямой доступ к контексту поля, т.е. {{firstName.errors |json}}
    firstName:this.firstName,  
    lastName: new FormControl(''),
      hasCar: new FormControl(true)
    });
  }

}
