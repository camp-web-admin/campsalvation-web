import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cs-app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

  @Input() title? : string;
  @Input() text? : string;

  ngOnInit(): void {
  }

}
