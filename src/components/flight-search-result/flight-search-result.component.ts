import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { SearchResponse } from '../../models/search-response';

@Component({
  selector: 'app-flight-search-result',
  templateUrl: './flight-search-result.component.html',
  styleUrls: ['./flight-search-result.component.css']
})
export class FlightSearchResultComponent implements OnInit {

  @Input() searchResults: SearchResponse;
  @Output() fly = new EventEmitter<boolean>();


  //page variables
  bookingIcons: string;
  constructor() {
   
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.searchResults);
  }

  /**
   * Click handler for book button
   * @param e 
   * @param index 
   */
  public bookThisFlight(e: any, index: number) {
    console.log(e, index);
    this.fly.emit(true);
  }
}
