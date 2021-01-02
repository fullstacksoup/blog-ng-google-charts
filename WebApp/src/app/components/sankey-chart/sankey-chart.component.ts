import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sankey-chart',
  templateUrl: './sankey-chart.component.html',
  styleUrls: ['./sankey-chart.component.scss']
})
export class SankeyChartComponent implements OnInit { // Documentation https://developers.google.com/chart/interactive/docs/gallery/sankey
  public chartData: any[] = [];
  public format: string;
  public type: string;
  public title: string;
  public width: number;
  public height: number;
  public myData: any[] = [];
  public sankeyOptions:
  {
    height: number; width: number; tooltip: any; sankey: 
    {
      node:
      {
        colors: string[];
      };
      link:
      {
        colorMode: string; 
        colors: string[]; 
      };
    };
  };

  constructor() { }

  ngOnInit(): void {
    this.title = 'Geo Chart';
    this.type = 'Sankey';
    const colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

    this.sankeyOptions = {
      height: 400,
      width: 1200,
      tooltip: { isHtml: true },
      sankey: {
        node: {
          colors: ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', '#cab2d6', '#ffff99', '#1f78b4', '#33a02c']
        },
        link: {
          colorMode: 'gradient',
          colors: ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', '#cab2d6', '#ffff99', '#1f78b4', '#33a02c']
        }
      }
    };
    // this.options.sankey.node.colors = colors;
    // this.options.sankey.link.colorMode = 'gradient';
    // this.options.sankey.link.colors = colors;

    this.chartData = [
      [ 'Brazil', 'Portugal', 5 ],
      [ 'Brazil', 'France', 1 ],
      [ 'Brazil', 'Spain', 1 ],
      [ 'Brazil', 'England', 1 ],
      [ 'Canada', 'Portugal', 1 ],
      [ 'Canada', 'France', 5 ],
      [ 'Canada', 'England', 1 ],
      [ 'Mexico', 'Portugal', 1 ],
      [ 'Mexico', 'France', 1 ],
      [ 'Mexico', 'Spain', 5 ],
      [ 'Mexico', 'England', 1 ],
      [ 'USA', 'Portugal', 1 ],
      [ 'USA', 'France', 1 ],
      [ 'USA', 'Spain', 1 ],
      [ 'USA', 'England', 5 ],
      [ 'Portugal', 'Angola', 2 ],
      [ 'Portugal', 'Senegal', 1 ],
      [ 'Portugal', 'Morocco', 1 ],
      [ 'Portugal', 'South Africa', 3 ],
      [ 'France', 'Angola', 1 ],
      [ 'France', 'Senegal', 3 ],
      [ 'France', 'Mali', 3 ],
      [ 'France', 'Morocco', 3 ],
      [ 'France', 'South Africa', 1 ],
      [ 'Spain', 'Senegal', 1 ],
      [ 'Spain', 'Morocco', 3 ],
      [ 'Spain', 'South Africa', 1 ],
      [ 'England', 'Angola', 1 ],
      [ 'England', 'Senegal', 1 ],
      [ 'England', 'Morocco', 2 ],
      [ 'England', 'South Africa', 7 ],
      [ 'South Africa', 'China', 5 ],
      [ 'South Africa', 'India', 1 ],
      [ 'South Africa', 'Japan', 3 ],
      [ 'Angola', 'China', 5 ],
      [ 'Angola', 'India', 1 ],
      [ 'Angola', 'Japan', 3 ],
      [ 'Senegal', 'China', 5 ],
      [ 'Senegal', 'India', 1 ],
      [ 'Senegal', 'Japan', 3 ],
      [ 'Mali', 'China', 5 ],
      [ 'Mali', 'India', 1 ],
      [ 'Mali', 'Japan', 3 ],
      [ 'Morocco', 'China', 5 ],
      [ 'Morocco', 'India', 1 ],
      [ 'Morocco', 'Japan', 3 ]
     ];
    }

    public getSelection($event) {
      console.log('Selected ', $event)
    }

    public createCustomHTMLContent(flagURL, totalGold, totalSilver, totalBronze) {
      return '<div style="padding:5px 5px 5px 5px;">' +
          '<img src="' + flagURL + '" style="width:75px;height:50px"><br/>' +
          '<table class="medals_layout">' + '<tr>' +
          '<td><img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Gold_medal.svg" style="width:25px;height:25px"/></td>' +
          '<td><b>' + totalGold + '</b></td>' + '</tr>' + '<tr>' +
          '<td><img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Silver_medal.svg" style="width:25px;height:25px"/></td>' +
          '<td><b>' + totalSilver + '</b></td>' + '</tr>' + '<tr>' +
          '<td><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Bronze_medal.svg" style="width:25px;height:25px"/></td>' +
          '<td><b>' + totalBronze + '</b></td>' + '</tr>' + '</table>' + '</div>';
    }
}
