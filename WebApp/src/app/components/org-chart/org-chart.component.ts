import { Component, OnInit } from '@angular/core';
export class options {
  backgroundColor: string;
  selectionColor: string;
  color: string;
  selectedNodeClass: string;
  resolution: string;
  size: string;
  allowHtml: boolean;
}
@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.scss']
})
export class OrgChartComponent implements OnInit { // Documentation https://developers.google.com/chart/interactive/docs/gallery/orgchart
  public chartData: any[] = [];
  public format: string;
  public type: string;
  public title: string;
  public width: number;
  public height: number;
  public myData: any[] = [];  
  public options = new options();

  constructor() { }

  ngOnInit(): void {
    this.title = 'Geo Chart';
    // this.type = 'PieChart';
    this.type = 'OrgChart';
    this.width = 800;
    this.height = 600;
    this.options.backgroundColor = 'smokewhite';
    this.options.size = 'large'; // small medium
    this.options.selectedNodeClass = '';
    this.options.selectionColor = '#F00';
    this.options.color = '#FFF000';
    this.options.allowHtml = true;

    this.chartData = [
          [{'v':'Mike', 'f':'Mike<div style="color:red; font-style:italic">President</div>'},
           '', 'The President'],
          [{'v':'Jim', 'f':'Jim<div style="color:red; font-style:italic">Vice President</div>'},
           'Mike', 'VP'],
          ['Alice', 'Mike', ''],
          ['Bob', 'Jim', 'Bob Sponge'],
          ['Carol', 'Bob', '']
     ];
    }

    public getSelection($event) {
      console.log('Selected ', $event)
    }
}
