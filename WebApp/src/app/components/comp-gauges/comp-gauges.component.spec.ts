import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompGaugesComponent } from './comp-gauges.component';

describe('CompGaugesComponent', () => {
  let component: CompGaugesComponent;
  let fixture: ComponentFixture<CompGaugesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompGaugesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompGaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
