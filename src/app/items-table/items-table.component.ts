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
  itemName!: string;
  itemQuant!: number;
  selectItemName = 0;
  selectItemQuantity = 0;

  public cart: any = [];

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
    this.cart.splice(i, 1);
    if (this.cart.length < 8) {
      document.getElementById('inputRow')!.style.display = 'table-row';
    }
    document.getElementById("onaddBtn")?.removeAttribute("disabled");
    document.getElementById('voiceDataBtn')?.removeAttribute("disabled");
    document.getElementById("audioPlayer")?.setAttribute("src", "");
  }

  //Main Method to handle add Button
  addItem() {
    const itemInCart = {
      Name: this.itemName,
      Quantity: this.itemQuant,
    };
    this.cart.push(itemInCart);
    if (this.cart.length >= 8) {
      document.getElementById('inputRow')!.style.display = 'none';
    }

    document.getElementById('quantSelect')!.style.visibility = 'hidden';
    document.getElementById('addItemButton')!.style.visibility = 'hidden';
    document.getElementById("onaddBtn")?.removeAttribute("disabled");
    document.getElementById('voiceDataBtn')?.removeAttribute("disabled");
    document.getElementById("audioPlayer")?.setAttribute("src", "");
    
    this.selectItemName = 0;
    this.selectItemQuantity = 0;

  }

  //Filling and making below ShowOrdertable visible
  showOrder() {
    if(this.cart.length === 0 ){
      alert("Please select some items");
    }else{
      this.childEvent.emit(this.cart);
      document.getElementById('voiceDataBtn')!.style.visibility = 'visible';
      document.getElementById("onaddBtn")?.setAttribute("disabled", "");
    }
  }
}
