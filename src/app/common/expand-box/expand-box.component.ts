import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ExpandBoxData {
  title: string,
  information: string
}

@Component({
  selector: 'cs-app-expand-box',
  templateUrl: './expand-box.component.html',
  styleUrls: ['./expand-box.component.css']
})
export class ExpandBoxComponent implements OnInit {
  @Input() boxDataObserver: BehaviorSubject<ExpandBoxData[]> = new BehaviorSubject<ExpandBoxData[]>([]);
  @Input() accordianTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
