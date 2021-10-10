import { Component} from '@angular/core';
import { banner, icons} from './index.const';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent{
  banner = banner;
  icons = icons;
}
