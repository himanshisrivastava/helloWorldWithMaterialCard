import { MyProjectPage } from './app.po';
import { MaterialModule } from '@angular/material';

describe('my-project App', function() {
  let page: MyProjectPage;

  beforeEach(() => {
    page = new MyProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
     expect(page.getParagraphText()).toEqual('My Card title');
  });
});
