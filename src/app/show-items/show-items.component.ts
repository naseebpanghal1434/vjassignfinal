import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {
  @Input() public data: any;
  @Output() dataChange = new EventEmitter();
  // public cart: any;
  constructor(private httpclient: HttpClient) { }
  ngOnInit(): void {
    this.dataChange.emit(this.data)
  }
}
