import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashAvailableComponent } from './cash-available.component';

describe('CashAvailableComponent', () => {
  let component: CashAvailableComponent;
  let fixture: ComponentFixture<CashAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
