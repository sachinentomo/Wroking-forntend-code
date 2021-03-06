import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';



const routes: Routes = [
  {
    path: 'adminLogin',
    component: AdminHomeComponent
  },
  {
    path: '',
    component: AdminHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
