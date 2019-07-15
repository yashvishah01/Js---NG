import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-bar',
  templateUrl: './cart-bar.component.html',
  styleUrls: ['./cart-bar.component.css']
})
export class CartBarComponent implements OnInit {

  @Input("qty") qty;

  constructor() { }

  ngOnInit() {
  }

}
