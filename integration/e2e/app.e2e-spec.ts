import { browser, element, by } from 'protractor';
import { AppComponent } from '../src/app/app.component';

describe('Ngx-ContentEditable E2E tests', function () {

  beforeEach(function() {
   this.app = new AppComponent();
 });

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  it('should display contenteditable', () => {
    expect(element(by.css('.contentEditable'))).toBeTruthy();
  });
});
