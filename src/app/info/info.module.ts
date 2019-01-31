import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from '../components/info/info.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:InfoComponent,
        outlet:"window2"
      }
    ])
  ],
  declarations: [InfoComponent]
})
export class InfoModule { }
