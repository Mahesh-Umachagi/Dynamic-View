import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getauthors(callback) {
    this.http.get('http://localhost:3000/authors').subscribe((result) => {
      callback(result);
    });
  }

  getbooks(callback) {
    this.http.get('http://localhost:3000/books').subscribe((result) => {
      callback(result);
    });
  }
}
