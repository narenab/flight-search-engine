import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import dependent components
import { FlightSearchResultComponent } from './flight-search-result.component';
import { FlightInfoComponent } from '../flight-info/flight-info.component';

describe('FlightSearchResultComponent', () => {
  let component: FlightSearchResultComponent;
  let fixture: ComponentFixture<FlightSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightSearchResultComponent, FlightInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchResultComponent);
    component = fixture.componentInstance;
    component.searchResults = {
      bookingInfo: {
        originCity: '', destinationCity: '', oneway: true, refine: 10000, departureDate: '', returnDate: '', passengers: 1
      },
      oneway: true, oneWayFlights: [], returningFlights: []
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a info-box component`, async(() => {
    const fixture = TestBed.createComponent(FlightSearchResultComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('info-box')).toBeDefined();
  }));
});
