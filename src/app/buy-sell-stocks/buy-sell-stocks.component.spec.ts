import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySellStocksComponent } from './buy-sell-stocks.component';

describe('BuySellStocksComponent', () => {
  let component: BuySellStocksComponent;
  let fixture: ComponentFixture<BuySellStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuySellStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuySellStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
