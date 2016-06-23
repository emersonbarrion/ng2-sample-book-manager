import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from '../../services/google-books/google-books.service';
import { AppState } from '../../app-state';
import { AddCommasPipe } from '../../pipes/add-commas';
import { EllipsisPipe } from '../../pipes/ellipsis';
import { Book } from '../../models/book';

@Component({
  moduleId: module.id,
  selector: 'app-book',
  templateUrl: 'book.component.html',
  pipes: [ AddCommasPipe, EllipsisPipe ],
  styleUrls: ['book.component.css'],
  providers: [GoogleBooksService],
  directives: [MD_CARD_DIRECTIVES]
})
export class BookComponent implements OnInit {
  book: any;
  error: any;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private googleBooksService: GoogleBooksService) {
    this.book = store.select('selectedBook');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.googleBooksService
          .getBook(id)
          .subscribe(book => this.book = book,
							       error => this.error = <any>error);
                     //this.store.dispatch({ type: 'SELECTED_BOOK', payload: book }
    });
  }

	addFavorite(book: Book) {
    this.store.dispatch({ type: 'ADD_FAVORITE_BOOK', payload: book });
	}
}