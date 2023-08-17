import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  
    {path:'',component:HomeComponent},
    {path:'About',component:AboutComponent, children:[{path:'Employees',component:EmployeesComponent}]} ,
    {path:'Contact',component:ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
