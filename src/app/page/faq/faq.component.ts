import { Component, OnInit, NgZone } from '@angular/core';
import { ExpandBoxData } from 'src/app/common/expand-box/expand-box.component';
import { GSheetsService } from 'src/app/services/gsheets.service';
import { BehaviorSubject } from 'rxjs';

interface faqCacheData {
  generalCache: ExpandBoxData[],
  camperCache: ExpandBoxData[],
  staffCache: ExpandBoxData[]
}

@Component({
  selector: 'cs-app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  generalBoxData: BehaviorSubject<ExpandBoxData[]> = new BehaviorSubject<ExpandBoxData[]>([]);
  campersBoxData: BehaviorSubject<ExpandBoxData[]> = new BehaviorSubject<ExpandBoxData[]>([]);
  staffBoxData: BehaviorSubject<ExpandBoxData[]> = new BehaviorSubject<ExpandBoxData[]>([]);

  EXPAND_BOX_CONST = {
    sheet: 'faq',
    query: 'A:F',
    cacheKey: 'expandBoxData'
  };

  constructor(
    private _gSheets: GSheetsService,
    private _ngZone: NgZone) {
  }

  ngOnInit(): void {
    // Displayed cached data if we have it
    const cacheData = localStorage.getItem(this.EXPAND_BOX_CONST.cacheKey);

    // Used cache data initially
    if (cacheData != null) {
      const cacheObj: faqCacheData = JSON.parse(cacheData)
      this.generalBoxData.next(cacheObj.generalCache);
      this.campersBoxData.next(cacheObj.camperCache);
      this.staffBoxData.next(cacheObj.staffCache);
    }

    // Request actual data
    this._gSheets.getCellData(this.EXPAND_BOX_CONST.sheet, this.EXPAND_BOX_CONST.query)
      .subscribe((response) => {
        this._ngZone.run(() => {
          // Once current data comes in use it
          this.responseToExpandBox(response.result.values);
        });
      });
  }

  private responseToExpandBox(values: any) {
    const generalData: ExpandBoxData[] = [];
    const camperData: ExpandBoxData[] = [];
    const staffData: ExpandBoxData[] = [];

    // Set data from response
    for (const value of values) {
      if (value[0] != null && value[1] != null) {
        generalData.push({
          title: value[0],
          information: value[1]
        });
      }
      if (value[2] != null && value[3] != null) {
        camperData.push({
          title: value[2],
          information: value[3]
        });
      }
      if (value[4] != null && value[5] != null) {
        staffData.push({
          title: value[4],
          information: value[5]
        });
      }
    }

    // Update observables
    this.generalBoxData.next(generalData);
    this.campersBoxData.next(camperData);
    this.staffBoxData.next(staffData);

    // Cache data to user later
    const cacheData: faqCacheData = {
      generalCache: generalData,
      camperCache: camperData,
      staffCache: staffData
    }
    localStorage.setItem(this.EXPAND_BOX_CONST.cacheKey, JSON.stringify(cacheData));
  }
}
