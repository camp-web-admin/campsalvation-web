import { Component, OnInit, AfterContentInit, NgZone } from '@angular/core';
import { banner, icons } from './index.const';
import { GSheetsService } from '../../services/gsheets.service'
import { CarouselComponent, CarouselData } from '../../common/carousel/carousel.component'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cs-app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  carouselData: BehaviorSubject<CarouselData[]> = new BehaviorSubject<CarouselData[]>([]);
  banner = banner;
  icons = icons;

  CAROUSEL_CONST = {
    sheet: 'home',
    query: 'A:B',
    cacheKey: 'carouselData'
  };

  constructor(
    private _gSheets: GSheetsService,
    private _ngZone: NgZone) {
  }

  ngOnInit(): void {
    // Displayed cached data if we have it
    const cacheCarouselData = localStorage.getItem(this.CAROUSEL_CONST.cacheKey);

    if (cacheCarouselData != null) {
      this.carouselData.next(JSON.parse(cacheCarouselData))
    }

    // Request scroll data
    this._gSheets.getCellData(this.CAROUSEL_CONST.sheet, this.CAROUSEL_CONST.query)
      .subscribe((response) => {
        this._ngZone.run(() => {
          this.responseToScrollObject(response.result.values);
        });
      });
  }

  private responseToScrollObject(values: any) {
    let data: CarouselData[] = [];
    for (const value of values) {
      data.push({
        text: value[0],
        subText: value[1]
      });
    }
    this.carouselData.next(data);
    localStorage.setItem(this.CAROUSEL_CONST.cacheKey, JSON.stringify(data));
  }
}
