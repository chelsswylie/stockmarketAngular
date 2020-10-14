import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { ClockComponent } from './clock/clock.component';
import { StockPricesComponent } from './stock-prices/stock-prices.component';
import { CashAvailableComponent } from './cash-available/cash-available.component';
import { BuySellStocksComponent } from './buy-sell-stocks/buy-sell-stocks.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    StocksListComponent,
    ClockComponent,
    StockPricesComponent,
    CashAvailableComponent,
    BuySellStocksComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
