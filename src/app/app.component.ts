import { Component, OnInit } from '@angular/core';
import { AppConstantsService } from 'src/app/common/app-constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Aug18Home';
  public bgRef: any = {};


  public constructor(
    public appConstatnts: AppConstantsService,
  ) {
    
  }

  public ngOnInit(): void {
    this.appConstatnts.SEL_BG_REF_OBJ_AS_OBSERABLE.subscribe( (bgRef) => {
      setTimeout(() => {
        this.bgRef = bgRef;
      }, 10);
    });
  }
}
