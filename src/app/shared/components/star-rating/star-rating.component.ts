import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  @Input() rating = 0;
  star_width = 0;
  @Output() rating_clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(): void {
    this.star_width = this.rating * 75/ 5;
  }

  on_click():void{
    this.rating_clicked.emit(`Currently Rated @ ${this.rating}`)

  }

}
