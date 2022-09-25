import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css'],
})
export class ItemsTableComponent implements OnInit {
  @Output() public childEvent = new EventEmitter();

  items = ['Pencil', 'Book', 'Pen', 'Shoes', 'Bag', 'Box', 'Dress', 'Eraser'];
  itemQuantity = [1, 2, 3, 4, 5];
  selected: number = 1;
  itemName!: string;
  itemQuant!: number;
  selectItemName = 0;
  selectItemQuantity = 0;
  public mydata: any = [];

  constructor() {}

  ngOnInit(): void {

    //Initially Visibility of Buttons and Table is Hidding 
    if (this.itemName == undefined || this.itemName == '') {
      document.getElementById('quantSelect')!.style.visibility = 'hidden';
      document.getElementById('addItemButton')!.style.visibility = 'hidden';
    }
    document.getElementById("onaddBtn")?.setAttribute("disabled", "");
  }

  //Making Next Element visible on Onchange Event
  itemSelectOnchange() {
    document.getElementById('quantSelect')!.style.visibility = 'visible';
  }
  quantSelectOnChange() {
    document.getElementById('addItemButton')!.style.visibility = 'visible';
  }

  //Remove item from selected items
  removeItem(i: number) {
    this.mydata.splice(i, 1);
    if (this.mydata.length < 8) {
      document.getElementById('inputRow')!.style.display = 'table-row';
    }
    document.getElementById("onaddBtn")?.removeAttribute("disabled");
    document.getElementById('voiceDataBtn')?.removeAttribute("disabled");
  }

  //Main Method to handle add Button
  onAdd() {
    const itemInCart = {
      item: this.itemName,
      quantity: this.itemQuant,
    };
    this.mydata.push(itemInCart);
    if (this.mydata.length >= 8) {
      document.getElementById('inputRow')!.style.display = 'none';
    }

    document.getElementById('quantSelect')!.style.visibility = 'hidden';
    document.getElementById('addItemButton')!.style.visibility = 'hidden';
    document.getElementById("onaddBtn")?.removeAttribute("disabled");
    document.getElementById('voiceDataBtn')?.removeAttribute("disabled");
    
    this.itemName = '0';
    this.itemQuant = 0;
  }

  //Filling and making below ShowOrdertable visible
  showOrder() {
    if(this.mydata.length === 0 ){
      alert("Please select some items");
    }else{
      this.childEvent.emit(this.mydata);
      document.getElementById('voiceDataBtn')!.style.visibility = 'visible';
      document.getElementById("onaddBtn")?.setAttribute("disabled", "");
    }
  }
}
