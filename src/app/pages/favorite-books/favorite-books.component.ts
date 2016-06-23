import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookListComponent } from '../../components/book-list';
import { Book } from '../../models/book'; 

@Component({
  moduleId: module.id,
  selector: 'app-favorite-books',
  templateUrl: 'favorite-books.component.html',
  styleUrls: ['favorite-books.component.css'],
  directives: [BookListComponent]
})
export class FavoriteBooksComponent implements OnInit {
  books: any;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.books = this.store.select('favoriteBooks');
  }
}