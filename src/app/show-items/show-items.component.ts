import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {
  @Input() public cart: any;
  constructor() { }
  ngOnInit(): void {
  }
}
