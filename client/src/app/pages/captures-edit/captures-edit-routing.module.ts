import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapturesEditComponent } from './captures-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CapturesEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapturesEditRoutingModule { }
