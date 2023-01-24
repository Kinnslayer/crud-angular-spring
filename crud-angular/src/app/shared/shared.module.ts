import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';




@NgModule({
  // Somente componentes.
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
  ],
  // Somente módulos.
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
