import { NgrxErrorPage } from './app.po';

describe('ngrx-error App', () => {
  let page: NgrxErrorPage;

  beforeEach(() => {
    page = new NgrxErrorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
