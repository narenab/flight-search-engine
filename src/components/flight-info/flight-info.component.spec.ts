import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInfoComponent } from './flight-info.component';

describe('FlightInfoComponent', () => {
  let component: FlightInfoComponent;
  let fixture: ComponentFixture<FlightInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightInfoComponent);
    component = fixture.componentInstance;
    component.queriedData = {
      originCity: '', destinationCity: '', oneway: true, refine: 10000, departureDate: '', returnDate: '', passengers: 1
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a div component with class flightTimingInfo`, async(() => {
    const fixture = TestBed.createComponent(FlightInfoComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.flightTimingInfo')).toBeTruthy();
  }));
});
