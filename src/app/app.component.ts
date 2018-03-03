import { Component } from '@angular/core';
import { BookingInformation } from '../models/booking-info';
import { SearchResponse } from '../models/search-response';

import { NouiFormatter } from 'nouislider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flight Search Engine';
  bookingInfo: BookingInformation;
  searchResults: SearchResponse;
  loading: boolean = false;
  fly: boolean = false;

  constructor() {
    this.bookingInfo = {
      originCity: '',
      destinationCity: '',
      departureDate: '',
      returnDate: '',
      passengers: 1,
      oneway: true,
      refine: 1000
    };
    this.searchResults = {
      oneWayFlights: [],
      returningFlights: [],
      oneway: true,
      bookingInfo: this.bookingInfo
    };
  }

  /**
   * Listener for EventEmitter on child pages.
   * @param searchResults
   */
  public updateInputParams(searchResults: SearchResponse) {
    console.log('Ok got that emitted value mate');
    this.bookingInfo = searchResults.bookingInfo;
    this.searchResults = searchResults;
  }

  public swapLoading(loading: boolean) {
    console.log("Swapping", loading)
    this.loading = loading;
  }

  /**
   * The easter egg animation for
   * adding fly class to element
   * @param fly 
   */
  public updateFlying(fly: boolean) {
    this.fly = fly;
  }
}

export class TimeFormatter implements NouiFormatter {
  to(value: number): string {
    let h = Math.floor(value / 3600);
    let m = Math.floor(value % 3600 / 60);
    let s = value - 60 * m - 3600 * h;
    let values = [h, m, s];
    let timeString: string = '';
    values.forEach((_, i) => {
      if(values[i] < 10) {
        timeString += '0';
      }
      timeString += values[i].toFixed(0);
      if(i < 2) {
        timeString += ':';
      }
    });
    return timeString;
  };

  from(value: string): number {
    let v = value.split(':').map(parseInt);
    let time: number = 0;
    time += v[0] * 3600;
    time += v[1] * 60;
    time += v[2];
    return time;
  }
}