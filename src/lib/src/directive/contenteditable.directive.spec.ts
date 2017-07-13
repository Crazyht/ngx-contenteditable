import { FormsModule } from '@angular/forms';
import { ContentEditableDirective } from './contenteditable.directive';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Directive, DebugElement, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('ContentEditableDirective', function () {
  let de: DebugElement;
  let directive: ContentEditableDirective;
  let fixture: ComponentFixture<BasicDemo>;
  let pDebugElement: DebugElement;
  let pElement: HTMLParagraphElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      CommonModule,
      FormsModule,
    ],
    declarations: [
      ContentEditableDirective, BasicDemo
    ],
    });
    TestBed.compileComponents();
  }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BasicDemo);
        fixture.detectChanges();
        pDebugElement = fixture.debugElement.query(By.css('p'));
        pElement = <HTMLParagraphElement>pDebugElement.nativeElement;
        directive = pDebugElement.injector.get<ContentEditableDirective>(ContentEditableDirective);
    });
  it('should create directive', () => expect(directive).toBeDefined());
});

@Component({
  selector: 'app',
  template: `
    <p contenteditable
        class="contentEditable"
        [(ngModel)]="text2"
        name="example2"
        required="true"
        minlength="2"
        maxlength="30"
        multiline="true"
        #example2="ngModel">
    </p>`
})
class BasicDemo {
  text2 = 'test';
  @ViewChild(ContentEditableDirective) directive: ContentEditableDirective;
}
