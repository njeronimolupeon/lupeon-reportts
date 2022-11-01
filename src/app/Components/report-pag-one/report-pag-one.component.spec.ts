import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPagOneComponent } from './report-pag-one.component';

describe('ReportPagOneComponent', () => {
  let component: ReportPagOneComponent;
  let fixture: ComponentFixture<ReportPagOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPagOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPagOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
