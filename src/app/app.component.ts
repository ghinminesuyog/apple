import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'apple';

  ngOnInit(){
    this.adjustContentPaddingTop()
  }

  adjustContentPaddingTop(){
    const header = document.getElementById('header');
    const headerHeight = header.getBoundingClientRect().height;

    const appContent = document.getElementById('appContent');
    appContent.style.paddingTop = String(headerHeight) + "px";

  }

}

