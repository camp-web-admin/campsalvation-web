import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, from } from "rxjs";
declare let gapi: any;

@Injectable({
    providedIn: 'root',
})
export class GSheetsService {
    API_KEY = 'AIzaSyDJySHZpSDvkoPaKRxK8L06pPaSa7oqols';
    DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
    SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
    SHEET_ID = "1RpSa1rVqQiOYg-C0aX3RfepD0SQG5FuGKghPc58SSX0";

    constructor(private _http: HttpClient) {
    }

    // Request data from a specific sheet and cell
    getCellData(sheet: string, cells: string): Observable<any> {
        // If the API has not been inialized, initialize it
        if (gapi.client == null) {
            return from(new Promise (resolve => {this.initGapi()
                .then(() => {
                     resolve(this.getData(sheet, cells));
                })
            }))
        }
        return from(new Promise (reslove => reslove(this.getData(sheet, cells))));
    }

    // Initialize the google sheets api
    private initGapi(): Promise<any> {
        return new Promise(resolve => {
            gapi.load('client', () => {
                resolve(gapi.client.init({
                    apiKey: this.API_KEY,
                    discoveryDocs: this.DISCOVERY_DOCS,
                }));
            });
        });
    }

    // Make request to get data from sheets
    private getData(sheet: string, cells: string): Promise<any> {
        return gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: this.SHEET_ID,
            range: `${sheet}!${cells}`
        });
    }
}