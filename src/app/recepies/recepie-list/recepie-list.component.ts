import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[] = [
    new Recepie(
      'Test Recepie',
      'This is simply a Test',
      // tslint:disable-next-line:max-line-length
      'https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg'
    ),
    new Recepie(
      'Test Recepie 2',
      'This is simply a Test 2',
      'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}
}
