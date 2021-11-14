import { Component, OnInit, NgZone } from '@angular/core';
import { ExpandBoxData } from 'src/app/common/expand-box/expand-box.component';
import { GSheetsService } from 'src/app/services/gsheets.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cs-app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  expandBoxData: BehaviorSubject<ExpandBoxData[]> = new BehaviorSubject<ExpandBoxData[]>([]);

  EXPAND_BOX_CONST = {
    sheet: 'faq',
    query: 'A:B',
    cacheKey: 'expandBoxData'
  };

  constructor(
    private _gSheets: GSheetsService,
    private _ngZone: NgZone) {
  }

  ngOnInit(): void {
    // Displayed cached data if we have it
    const cacheData = localStorage.getItem(this.EXPAND_BOX_CONST.cacheKey);

    // Used cahce data initially
    if(cacheData != null) {
      this.expandBoxData.next(JSON.parse(cacheData))
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
    let data: ExpandBoxData[] = [];
    for (const value of values) {
      data.push({
        title: value[0],
        information: value[1]
      });
    }
    this.expandBoxData.next(data);
    localStorage.setItem(this.EXPAND_BOX_CONST.cacheKey, JSON.stringify(data));
  }

}
