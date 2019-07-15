import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {

  constructor() { }

  currentTab = 1;
  qty=0;count=0;

  @Input("value") item=undefined;
  @Input("cartQty") cartQty;
  @Output() buy = new EventEmitter();

  reviews = [
    { author: 'who@mail.com', stars: 5, body: 'sample-review-1' },
    { author: 'who@mail.com', stars: 2, body: 'sample-review-2' }
  ]

  ngOnInit() {
  }

  isTabSelected(tabIndex){
    return this.currentTab === tabIndex;
  }

  changeTab(event, tabIndex) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }

  incrementQty($event){
    this.qty++;
   // this.buy.emit({value: this.item,id: this.item.id});
    this.buy.emit({item: this.item});
  }

 



}
