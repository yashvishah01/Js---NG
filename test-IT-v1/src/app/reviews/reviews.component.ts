import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input("value") review;

  stars = [];

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.stars = []
    for (let i = 0; i < this.review.stars; i++)
      this.stars.push(i)
  }

}
