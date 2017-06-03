import { SelfPrototypeClientPage } from './app.po';

describe('self-prototype-client App', () => {
  let page: SelfPrototypeClientPage;

  beforeEach(() => {
    page = new SelfPrototypeClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
