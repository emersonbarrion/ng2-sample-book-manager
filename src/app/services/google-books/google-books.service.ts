import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Book } from '../../models/book';
import { Observable } from 'rxjs/Rx';

declare let _: any;

const API_URL: string = 'https://www.googleapis.com/books/v1/';
const API_KEY: string = 'AIzaSyDeoa4Z1eFpm-RywHByLlomzvUO1f8OPf0';
const USER_ID: string = '102110239655793071330';

@Injectable()
export class GoogleBooksService implements OnInit {

  constructor(private http: Http) {
  }
  ngOnInit() {}

  extractData(res: Response): Book[] {
		let results = res.json();
		let books: Book[] = [];
		
		_.each(results.items, (result) =>{
			books.push({
				'id': result.id,
				'title': result.volumeInfo.title,
				'description': result.volumeInfo.description,
				'thumbnail': result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.smallThumbnail : '',
        'authors': result.volumeInfo.authors ? result.volumeInfo.authors : ''
			});
		});

		return books;
  }

  extractBook (res): Book {
    let results = res.json();
		console.log(results.id);
    return {
      'id': results.id,
      'title': results.volumeInfo.title,
      'description': results.volumeInfo.description,
      'thumbnail': results.volumeInfo.imageLinks ? results.volumeInfo.imageLinks.smallThumbnail : '',
      'authors': results.volumeInfo.authors ? results.volumeInfo.authors : '' 
    }
  }

	private handleError (error: any) {
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';

		console.error(errMsg);

		return Observable.throw(errMsg);
	}

  getBook(id: string): Observable<Book> {
    console.log(id);
		return this.http
					      .get(`${API_URL}volumes/${id}`)
					      .map(this.extractBook)
					      .catch(this.handleError);
  }

  searchBooks(searchText): Observable<Book[]> {
		return this.http
					.get(`${API_URL}volumes?q=intitle:${searchText}`)
					.map(this.extractData)
					.catch(this.handleError);
  }

	addFavoriteBooks(book: Book) {
		//this.store.dispatch({ type: 'ADD_FAVORITE_BOOK', payload: book });
	}

	removeFavoriteBooks(book: Book) {
		//this.store.dispatch({ type: 'REMOVE_FAVORITE_BOOK', payload: book });
	}
}
