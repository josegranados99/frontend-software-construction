import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeDashComponent } from './components/dash/welcome-dash/welcome-dash.component';
import { BodyDashComponent } from './components/dash/body-dash/body-dash.component';
import { CreateProductComponent } from './components/private/products/create-product/create-product.component';
import { ListProductComponent } from './components/private/products/list-product/list-product.component';
import { CreateTypeComponent } from './components/private/type-products/create-type/create-type.component';
import { ListTypeComponent } from './components/private/type-products/list-type/list-type.component';
import { vigilantGuard } from './vigilant.guard';

export const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tablelist', component: TableComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'dash',
    component: BodyDashComponent,
    canActivate: [vigilantGuard],
    children: [
      {
        path: 'board',
        component: WelcomeDashComponent,
      },
      {
        path: 'product',
        component: CreateProductComponent,
      },
      {
        path: 'list-product',
        component: ListProductComponent,
      },
      {
        path: 'product-type',
        component: CreateTypeComponent,
      },
      {
        path: 'list-product-type',
        component: ListTypeComponent,
      },

      { path: '', redirectTo: 'board', pathMatch: 'full' },
      { path: '**', component: ErrorComponent },
    ],
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];
