import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';

const routes: Routes = [
  { path: '', component:  ListUsersComponent},// main component
  { path: 'add', component: AddEditComponent}, // component to add item
  { path: 'edit/:id', component: AddEditComponent }, // component to edit item
  { path: '**', redirectTo: '', pathMatch: 'full' } // path for user errors in the app
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
