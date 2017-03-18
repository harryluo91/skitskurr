import { SkitskurrPage } from './app.po';

describe('skitskurr App', function() {
  let page: SkitskurrPage;

  beforeEach(() => {
    page = new SkitskurrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
