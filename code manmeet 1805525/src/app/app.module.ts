import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { User } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthService } from './auth.service';
import { TestimonialsComponent } from './testimonials/testimonials.component';
//import { ToastrModule } from 'ngx-toastr';
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    TestimonialsComponent
  ],
  imports: [
    //BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
 
    //UserModule,
    ToastrModule.forRoot(),
    User,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule, ReactiveFormsModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
