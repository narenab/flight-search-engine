import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { NouisliderModule } from 'nouislider';

import { AppComponent } from './app.component';

import { FlightSearchFormComponent } from '../components/flight-search-form/flight-search-form.component';
import { FlightInfoComponent } from '../components/flight-info/flight-info.component';
import { FlightSearchResultComponent } from '../components/flight-search-result/flight-search-result.component';
import { FlightSearchServiceService } from '../services/flight-search-service.service';


export function providers() {
  return [FlightSearchServiceService];
}

export function imports() {
  return [
    BrowserModule,
    FormsModule,
    HttpModule
    //NouisliderModule
  ];
}

export function declarations() {
  return [
    AppComponent,
    FlightSearchFormComponent,
    FlightInfoComponent,
    FlightSearchResultComponent
  ];
}

@NgModule({
  declarations: declarations(),
  imports: imports(),
  providers: providers(),
  bootstrap: [AppComponent]
})
export class AppModule { }
