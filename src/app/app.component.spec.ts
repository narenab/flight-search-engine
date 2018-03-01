import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlightSearchFormComponent } from '../components/flight-search-form/flight-search-form.component';
import { FlightInfoComponent } from '../components/flight-info/flight-info.component';
import { FlightSearchResultComponent } from '../components/flight-search-result/flight-search-result.component';
import { FlightSearchServiceService } from '../services/flight-search-service.service';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [
        AppComponent,
        FlightSearchFormComponent,
        FlightInfoComponent,
        FlightSearchResultComponent
      ],
      providers: [FlightSearchServiceService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Flight Search Engine'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    console.log("app", app);
    expect(app.title).toEqual('Flight Search Engine');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Flight Search Engine');
  }));
});
