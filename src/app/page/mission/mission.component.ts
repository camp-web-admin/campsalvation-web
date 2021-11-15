import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  title: string = 'Mission';

  constructor() { }

  ngOnInit(): void {
  }

}
