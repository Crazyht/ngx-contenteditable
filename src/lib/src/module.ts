import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContentEditableDirective } from'./directive/contenteditable.directive';

@NgModule({
  imports: [
      CommonModule,
      FormsModule
    ],
  declarations: [
      ContentEditableDirective
    ],
  exports: [
      ContentEditableDirective
    ]
})
export class NgxContentEditableModule {
}
