import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { SliderPointerComponent } from './slider-pointer.component';

@NgModule({
  declarations: [SliderComponent, SliderPointerComponent],
  imports: [CommonModule],
  exports: [SliderComponent]
})
export class SliderModule { }
