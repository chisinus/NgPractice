import { MyPracticePage } from './app.po';

describe('my-practice App', function() {
  let page: MyPracticePage;

  beforeEach(() => {
    page = new MyPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
