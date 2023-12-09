import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray} from '@angular/forms';


@Component({

// variable

  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent  {
    registerForm = this.fb.group({
        name:['', Validators.required],
        lastname:[],
        register: this.fb.group({
     tip:[''],
         number:[''],
         fecha:[''],
  nacionality:[''],
         email:[''],
         sugere:[''],


        }),
         aliases: this.fb.array(
            [
                this.fb.control('')
            ]
         )


    }
    );
    get aliases() {
        return this.registerForm.get('aliases') as FormArray;
      }
    
      constructor(private fb: FormBuilder) { }
    
      updateProfile() {
        this.registerForm.patchValue({
          name: 'Nombre',
          register: {
            tip: ''
          }
        });
      }
    
      addAlias() {
        this.aliases.push(this.fb.control(''));
      }
    
      onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.registerForm.value);
      }
    }
    



  
  
	
	 