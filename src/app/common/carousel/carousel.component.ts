import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CarouselData {
  text: string,
  subText: string
}

@Component({
  selector: 'cs-app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  @Input() carouselDataObservable: BehaviorSubject<CarouselData[]> =
    new BehaviorSubject<CarouselData[]>([]);
    temp: string = '';

  ngOnInit(): void {
    this.carouselDataObservable
      .subscribe((value) => {
        if (value.length > 0) {
          this.temp = value[0].text;
        }
      })
  }


}
