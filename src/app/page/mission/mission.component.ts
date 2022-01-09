import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExpandBoxComponent, ExpandBoxData } from 'src/app/common/expand-box/expand-box.component';

@Component({
  selector: 'cs-app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  title: string = 'Mission';
  missionStatements: BehaviorSubject<ExpandBoxData[]> = new BehaviorSubject<ExpandBoxData[]>([]);

  constructor() { }

  ngOnInit(): void {
    const missionStatement: ExpandBoxData = {
      title: 'Statement of Faith',
      information: ''
    };

    this.missionStatements.next([missionStatement])
  }

}
