import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { PresentComponent } from './present/present.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import{userDetailsModel}from '../shared/model/userDetails.model';
import { FooterComponent } from './footer/footer.component';
import{CommomService}from './commom.service';

const appRoutes: Routes = [
  { path: 'Register', component: CreateComponent },
  { path: 'View', component:PresentComponent},
  { path: 'Edit', component: EditComponent },
 // { path: '', component: LoginComponent, pathMatch: 'full'} // redirect to home page on load
];
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    PresentComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [userDetailsModel,CommomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
