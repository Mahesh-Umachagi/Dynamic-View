import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  constructor() { 
  }
  @Input() data;
  columns;
  ngOnInit(): void {
    if (this.data)
     this.columns = Object.keys(this.data[0]);
  }

  ngAfterViewInit()
  {
    
  }

}
