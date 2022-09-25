import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'vjAssign';
  itemCart : any;
  public itemheader=["Item Name", "Item Quantity"];
  audiosrc: any;

  constructor(){
  }
  mydataTable(event: any){
    this.itemCart = event;
  }
}
