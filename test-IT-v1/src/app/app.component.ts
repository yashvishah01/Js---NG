import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-IT-v1';
  cart={};
  qty=0;id_y=0; cartQty = 0;
  

  addToCart(event){
    // this.qty = event.value;
    // this.id_y=event.id;
 
    let { item } = event;
    let { id } = item;
    let itemLine = this.cart[id];
    if (itemLine) {
      itemLine = { item, qty: itemLine.qty + 1 }
    } else {
      itemLine = { item, qty: 1 }
    }
    this.cart = { ...this.cart, [id]: itemLine }
    this.cartQty = Object.keys(this.cart).length;

    console.log(this.cart);
    
  }
    

  }
  // addToCart(event){
  //   this.count=event.count;
  //   this.cart.push(event.value);
  //   console.log(event);
    
  // }
  



