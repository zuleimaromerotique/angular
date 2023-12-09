import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { FormikComponent } from './components/formik/formik.component';
export const routes: Routes = [
    {path: 'formik', component: FormikComponent},
    {path: 'register', component: RegisterComponent},
];
