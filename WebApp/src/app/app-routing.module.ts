import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SankeyChartComponent } from './components/sankey-chart/sankey-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { GeoChartComponent } from './components/geo-chart/geo-chart.component';
import { UsGeoChartComponent } from './components/us-geo-chart/us-geo-chart.component';
import { CompGaugesComponent } from './components/comp-gauges/comp-gauges.component';
import { OrgChartComponent } from './components/org-chart/org-chart.component';
import { CandlestickChartComponent } from './components/candlestick-chart/candlestick-chart.component';

const routes: Routes = [
  {
    path: '',
    component: PieChartComponent
  },
  {
    path: 'org-chart',
    component: OrgChartComponent
  },
  {
    path: 'gauges',
    component: CompGaugesComponent
  },

  {
    path: 'pie',
    component: PieChartComponent
  },
  {
    path: 'bar',
    component: BarChartComponent
  },
  {
    path: 'map',
    component: GeoChartComponent
  },
  {
    path: 'us-map',
    component: UsGeoChartComponent
  },
  {
    path: 'sankey',
    component: SankeyChartComponent
  },
  {
    path: 'stock',
    component: CandlestickChartComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
