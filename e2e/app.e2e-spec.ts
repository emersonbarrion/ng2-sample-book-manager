import { ObgBook3Page } from './app.po';

describe('obg-book3 App', function() {
  let page: ObgBook3Page;

  beforeEach(() => {
    page = new ObgBook3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
