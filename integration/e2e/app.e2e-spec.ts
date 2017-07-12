import { browser, element, by } from 'protractor';

describe('Ngx-ContentEditable E2E tests', function () {

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  it('should display contenteditable', () => {
    expect(element(by.css('.contentEditable'))).toBeTruthy();
  });
});
