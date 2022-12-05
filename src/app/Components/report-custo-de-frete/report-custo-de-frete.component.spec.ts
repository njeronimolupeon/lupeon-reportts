import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCustoDeFreteComponent } from './report-custo-de-frete.component';

describe('ReportCustoDeFreteComponent', () => {
  let component: ReportCustoDeFreteComponent;
  let fixture: ComponentFixture<ReportCustoDeFreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCustoDeFreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCustoDeFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
