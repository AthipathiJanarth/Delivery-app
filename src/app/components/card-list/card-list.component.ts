import { Component, OnInit } from '@angular/core';
import fooditemsmenu from '../../../assets/JSON/fooditem.json'

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit {
  fooditems = [
    {
      "Name": "Dosa",
      "Type": "Veg",
      "Cuisine": "South Indian",
      "Availability": [{ "breakfast": "BREAKFAST", "lunch": "LUNCH" }],
      "Price": "Rs.50"
    },
    {
      "Name": "Chappathi",
      "Type": "Veg",
      "Cuisine": "North Indian",
      "Availability": [{ "breakfast": "BREAKFAST", "lunch": "LUNCH", "dinner": "DINNER" }],
      "Price": "Rs.40"
    },
    {
      "Name": "Chicken FriedRice",
      "Type": "Non-Veg",
      "Cuisine": "Chinese",
      "Availability": [{ "lunch": "LUNCH", "dinner": "DINNER" }],
      "Price": "Rs.100"
    },
    {
      "Name": "Cheesecake",
      "Type": "Non-Veg",
      "Cuisine": "Desert",
      "Availability": [{ "lunch": "LUNCH", "dinner": "DINNER" }],
      "Price": "Rs.150"
    },
    {
      "Name": "Chicken Pizza",
      "Type": "Non-Veg",
      "Cuisine": "Italian",
      "Availability": [{ "lunch": "LUNCH", "dinner": "DINNER" }],
      "Price": "Rs.200"
    },
    {
      "Name": "Veg Pizza",
      "Type": "Veg",
      "Cuisine": "Italian",
      "Availability": [{ "lunch": "LUNCH", "dinner": "DINNER" }],
      "Price": "Rs.170"
    }
  ];
  constructor() { 
  }

  ngOnInit(): void {
  }

}
