import { Component  } from '@angular/core';
import { IconNameEnum } from 'ngx-simple-icons/src/lib/enum';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent  {

  public iconNames = IconNameEnum;

  constructor() { }

}
