import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostPredictionComponent } from './cost-prediction.component';

describe('CostPredictionComponent', () => {
  let component: CostPredictionComponent;
  let fixture: ComponentFixture<CostPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostPredictionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
