import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SocialMediaDatatableComponent } from './components/social-media-datatable/social-media-datatable.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { DummyService } from './services/dummy.service';
import { FormControl, FormGroup,ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SocialMediaDatatableComponent,
    HeaderComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  exports:[
    ReactiveFormsModule
  ],
  providers: [DummyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
