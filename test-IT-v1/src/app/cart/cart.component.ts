import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // @Input("value") qty;
  // @Input("id") id;
  @Input("cart") cart;
  cartItems = [];
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.cartItems = []
    let keys = Object.keys(this.cart);
    keys.forEach(key => this.cartItems.push(this.cart[key].item))
    //console.log(this.cartItems);
    
  }

}
