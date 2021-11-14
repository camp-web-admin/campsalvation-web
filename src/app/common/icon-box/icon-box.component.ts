import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-box',
  templateUrl: './icon-box.component.html',
  styleUrls: ['./icon-box.component.css']
})

export class IconBoxComponent implements OnInit {

  @Input() iconTitle: string;
  @Input() iconImg: string;
  @Input() iconText: string;
  @Input() link: string;

  constructor() {
    this.iconTitle = "";
    this.iconImg = "";
    this.iconText = "";
    this.link = "";
  }

  ngOnInit(): void {
  }

}
