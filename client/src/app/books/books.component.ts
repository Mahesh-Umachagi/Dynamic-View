import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  @Input () message : any;
 
  list;
  constructor( books: AppService) { 

    books.getbooks ((result) => {
      this.list=result;
    })
  }



  ngOnInit(): void {
  }

}
