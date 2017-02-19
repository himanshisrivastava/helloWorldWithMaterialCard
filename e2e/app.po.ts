import { browser, element, by } from 'protractor';
import { MaterialModule } from '@angular/material';

export class MyProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {

return element(by.css('app-root div md-card md-card-title-group div md-card-title')).getText();
    // return element(by.css('app-root md-toolbar div md-toolbar-row button span')).getText();
  }
}
