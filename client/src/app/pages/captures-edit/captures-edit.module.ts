import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapturesEditComponent } from './captures-edit.component';
import { CapturesEditRoutingModule } from './captures-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CapturesEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CapturesEditComponent
  ]
})
export class CapturesEditModule { }
