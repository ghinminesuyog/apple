import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHamOpen = false;
  isSearching = false

  constructor() { }

  ngOnInit() {
  }

  toggleHamMenu() {
    this.isHamOpen = !this.isHamOpen
  }

  toggleSearchBar() {
    this.isSearching = !this.isSearching
  }
}
