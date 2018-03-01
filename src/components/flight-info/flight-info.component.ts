import { Component, OnInit, Input } from '@angular/core';
import { BookingInformation } from '../../models/booking-info';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css']
})
export class FlightInfoComponent implements OnInit {

  @Input() queriedData: BookingInformation;

  constructor() { }

  ngOnInit() {
    
  }

}
