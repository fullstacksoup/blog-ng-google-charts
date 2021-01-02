import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsGeoChartComponent } from './us-geo-chart.component';

describe('UsGeoChartComponent', () => {
  let component: UsGeoChartComponent;
  let fixture: ComponentFixture<UsGeoChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsGeoChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsGeoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
