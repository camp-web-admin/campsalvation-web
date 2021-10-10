import { Component } from '@angular/core';
import { carouselData } from './carousel.const'

@Component({
  selector: 'cs-app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent {
  carouselData = carouselData;
}
