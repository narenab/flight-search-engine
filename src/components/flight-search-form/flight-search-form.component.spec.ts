import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchFormComponent } from './flight-search-form.component';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { FlightSearchServiceService } from '../../services/flight-search-service.service';

describe('SearchBoxComponent', () => {
  let component: FlightSearchFormComponent;
  let fixture: ComponentFixture<FlightSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightSearchFormComponent],
      imports: [FormsModule, HttpModule],
      providers: [FlightSearchServiceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a div component with class tab`, async(() => {
    const fixture = TestBed.createComponent(FlightSearchFormComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.tab')).toBeTruthy();
  }));
  it(`should have a div component with id refine`, async(() => {
    const fixture = TestBed.createComponent(FlightSearchFormComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div#refine')).toBeTruthy();
  }));
  it(`should have a form component`, async(() => {
    const fixture = TestBed.createComponent(FlightSearchFormComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  }));

});