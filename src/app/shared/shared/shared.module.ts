import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../components/star-rating/star-rating.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../convert-to-spaces.pipe';



@NgModule({
  declarations: [
    StarRatingComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarRatingComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
