import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tablelist', component: TableComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];
