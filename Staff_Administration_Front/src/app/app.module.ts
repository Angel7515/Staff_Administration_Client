import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarPageComponent } from './components/navbar-page/navbar-page.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarPageComponent,
    ListUsersComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
