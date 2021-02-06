import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    BooksComponent,
    TableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
