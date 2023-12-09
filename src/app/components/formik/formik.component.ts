import { Component } from '@angular/core';
import { FormBuilder, FormArray,FormControl, Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-formik',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './formik.component.html',
  styleUrl: './formik.component.scss'
})
export class FormikComponent {
  profileForm = this.fb.group({
 
 
  address: this.fb.group({
    email:['', Validators.required], 
    passoword: ['',Validators.required],
   
  }),
  aliases: this.fb.array([
    this.fb.control('')
  ])
});

get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}

constructor(private fb: FormBuilder) { }

updateProfile() {
  this.profileForm.patchValue({
    
    address: {
      email: 'Digite tu correo',
      passoword: 'Digite tu correo',
    }
  });
}

addAlias() {
  this.aliases.push(this.fb.control(''));
}

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}

  }

  

