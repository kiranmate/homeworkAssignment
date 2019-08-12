import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

import { RouterModule } from '@angular/router';
//import { appRoutes } from './routerConfig';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {SelectModule} from 'ng2-select';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { NextpageComponent } from './nextpage/nextpage.component';
import { InvalidComponent } from './invalid/invalid.component';



@NgModule({
  declarations: [
    AppComponent,
   
    TopMenuComponent,
    NextpageComponent,
    InvalidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    //RouterModule.forRoot(appRoutes)
    DropDownListModule,
   
    MDBBootstrapModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatFormFieldModule,
    NgMultiSelectDropDownModule.forRoot(),

    MatButtonToggleModule,
    MatAutocompleteModule,
    MatInputModule,
    SelectModule,
    WjInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }


