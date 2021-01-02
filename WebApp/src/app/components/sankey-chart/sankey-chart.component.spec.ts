import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SankeyChartComponent } from './sankey-chart.component';

describe('SankeyChartComponent', () => {
  let component: SankeyChartComponent;
  let fixture: ComponentFixture<SankeyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SankeyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SankeyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
