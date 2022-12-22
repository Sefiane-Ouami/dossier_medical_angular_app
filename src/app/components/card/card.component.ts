import { Component, Input, OnInit } from '@angular/core';
// using icons


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @Input () title: string = '';
 @Input () value: string = '';

  constructor() { }

  ngOnInit(): void {};

}
