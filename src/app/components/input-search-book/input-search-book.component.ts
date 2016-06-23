import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { Observable } from 'rxjs/Rx';

declare let _: any;

@Component({
  moduleId: module.id,
  selector: 'app-input-search-book',
  templateUrl: 'input-search-book.component.html',
  styleUrls: ['input-search-book.component.css'],
  directives: [MD_INPUT_DIRECTIVES]
})
export class InputSearchBookComponent implements OnInit {
  inputValue: string;
  @Output() books = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
        const eventStream = Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
            .map(() => this.inputValue)
            //.debounceTime(this.delay)
            .distinctUntilChanged();

        eventStream.subscribe((input) => { this.books.emit(input) });
  }
}