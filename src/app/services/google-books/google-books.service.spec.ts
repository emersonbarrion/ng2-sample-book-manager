/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { GoogleBooksService } from './google-books.service';

describe('GoogleBooks Service', () => {
  beforeEachProviders(() => [GoogleBooksService]);

  it('should ...',
      inject([GoogleBooksService], (service: GoogleBooksService) => {
    expect(service).toBeTruthy();
  }));
});
