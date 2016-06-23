import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state';
import { GoogleBooksService } from '../../services/google-books/google-books.service';
import { InputSearchBookComponent } from '../../components/input-search-book';
import { BookListComponent } from '../../components/book-list'; 
import { Book } from '../../models/book';

//import * as _ from 'lodash';
declare let _: any;

@Component({
  moduleId: module.id,
  selector: 'app-search-book',
  templateUrl: 'search-book.component.html',
  styleUrls: ['search-book.component.css'],
  directives: [InputSearchBookComponent, BookListComponent],
  providers: [GoogleBooksService]
})
export class SearchBookComponent implements OnInit {
  books: any;
  error: any;

  constructor(private googleBooksService: GoogleBooksService, private store: Store<AppState>) {
    this.books = store.select('searchBooks');
  }

  ngOnInit() {
  }

	searchBooks(query) {
		let words = _.split(_.trim(query), ' ');
		let searchText = _.join(words, '+');

		if (query) {
			this.googleBooksService
          .searchBooks(searchText)
          .subscribe(books => this.store.dispatch({ type: 'ADD_BOOKS', payload: books }),
							       error => this.error = <any>error);
		}
	}
}