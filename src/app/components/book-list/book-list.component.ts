import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { AddCommasPipe } from '../../pipes/add-commas';
import { EllipsisPipe } from '../../pipes/ellipsis';
import { Book } from '../../models/book';
import { AppState } from '../../app-state';

@Component({
  moduleId: module.id,
  selector: 'app-book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
  pipes: [ AddCommasPipe, EllipsisPipe ],
  directives: [MD_CARD_DIRECTIVES]
})
export class BookListComponent implements OnInit {
  @Input() books: Observable<Book[]>;
  @Input() favorite: boolean = false;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
  }

  onSelect(book: Book) {
    this.router.navigate(['/book', book.id]);
  }

  removeFavorite(book: Book) {
		this.store.dispatch({ type: 'REMOVE_FAVORITE_BOOK', payload: book });
	}
}