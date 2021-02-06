import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  list;
  constructor(authors: AppService) {
    authors.getauthors((result) => {
      this.list = result;
    });
  }

  ngOnInit(): void {}
}
