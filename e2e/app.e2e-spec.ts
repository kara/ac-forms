import { AcFormsPage } from './app.po';

describe('ac-forms App', function() {
  let page: AcFormsPage;

  beforeEach(() => {
    page = new AcFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
