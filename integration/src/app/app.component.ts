import { Component } from '@angular/core';

@Component({
  selector: 'integration-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  public text = 'Let\'s try 1st sample';
  public text2 = 'Let\'s try 2nd sample';
  public myValue = 'Test';
  public myMultilinevalue = `Test
  test
  test`;
}

