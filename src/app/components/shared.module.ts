import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PageLoadingComponent } from './shared/page-loading/page-loading.component';

const IMPORTS = [
  FormsModule,
  ReactiveFormsModule,
  ButtonModule,
];

const DECLARATIONS = [
  PageLoadingComponent
];

@NgModule({
  imports: [...IMPORTS, CommonModule],
  declarations: [...DECLARATIONS],
  exports: [...IMPORTS, ...DECLARATIONS],
})
export class SharedModule {}
