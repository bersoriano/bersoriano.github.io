import { BERSITEPage } from './app.po';

describe('ber-site App', function() {
  let page: BERSITEPage;

  beforeEach(() => {
    page = new BERSITEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
