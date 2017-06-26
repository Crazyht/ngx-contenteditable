import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public myValue = 'Test';
  public myMultilinevalue = `Test
  test
  test`;
}
