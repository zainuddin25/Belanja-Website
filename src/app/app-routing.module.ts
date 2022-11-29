import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/massage/message.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    component: ContentComponent
  },
  {
    path : 'login-page',
    component : LoginComponent
  },
  {
    path : 'register-page',
    component : RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'message-success',
    component: MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
