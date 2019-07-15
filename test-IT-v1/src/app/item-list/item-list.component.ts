import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() cart = {};
  @Output() buy = new EventEmitter();

  items = [
    {
      id: 1,
      title: 'item1',
      price: 200,
      desc: "yumm veg",
      image: 'assets/veg.png',
      canBuy: true,
      currency: 'INR'
      // review : [
      //   "nice",
      //   "best"
      // ] ,
    },
    {
      id: 2,
      title: 'item2',
      price: 300,
      desc: "yumm non-veg",
      image: 'assets/nonveg.png',
      canBuy: true,
      currency: 'INR'
      // review : [
      //   "cool",
      //   "hot"
      // ],
    }
  ]


  addToCart(event) {
    this.buy.emit(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
