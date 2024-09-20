import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconDirective } from '../directives/icon.directive';
import { ButtonModule } from 'primeng/button';

const IMPORTS = [
  FormsModule,
  ReactiveFormsModule,
  ButtonModule
];

const DECLARATIONS = [
  IconDirective,
];

@NgModule({
  imports: [...IMPORTS, CommonModule],
  declarations: [...DECLARATIONS],
  exports: [...IMPORTS, ...DECLARATIONS],
})
export class SharedModule {}
