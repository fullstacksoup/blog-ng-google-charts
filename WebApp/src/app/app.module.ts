/********************************************************************************/
/*                   A N G U L A R   L I B R A R I E S                    */
/********************************************************************************/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import 'hammerjs';

// *****************************************************************************
// 3 R D    P A R T Y   L I B R A R I E S
// *****************************************************************************

import { GoogleChartsModule } from 'angular-google-charts';


// ********************************************************************************
// *                A P P L I C A T I O N   S E R V I C E S
// ********************************************************************************


// ********************************************************************************
// *                A P P L I C A T I O N   C O M P O N E N T S
// ********************************************************************************

import { SankeyChartComponent } from './components/sankey-chart/sankey-chart.component';
import { MainNavigationLayoutComponent } from './main-navigation-layout/main-navigation-layout.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { GeoChartComponent } from './components/geo-chart/geo-chart.component';
import { UsGeoChartComponent } from './components/us-geo-chart/us-geo-chart.component';
import { CompGaugesComponent } from './components/comp-gauges/comp-gauges.component';
import { OrgChartComponent } from './components/org-chart/org-chart.component';
import { CandlestickChartComponent } from './components/candlestick-chart/candlestick-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    SankeyChartComponent,
    MainNavigationLayoutComponent,
    PieChartComponent,
    BarChartComponent,
    GeoChartComponent,
    UsGeoChartComponent,
    CompGaugesComponent,
    OrgChartComponent,
    CandlestickChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GoogleChartsModule
  ],
  exports: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    DatePipe,
    { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  entryComponents: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
