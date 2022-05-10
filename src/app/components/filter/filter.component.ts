import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})

export class FilterComponent implements OnInit {
  
  constructor() { }
  @Input() cuisineType: string[] =[];
  @Output() selectedType = new EventEmitter<string>();
  @Output() cuisineSelected: any =new EventEmitter();
  tempArray: string[] = [];
  ngOnInit(): void {
    
  }
  onTypeChange(event: any): void {
    this.selectedType.emit(event.target.defaultValue);
  }
  onChangeCuisine($event:any, cuisine: string) { 
    if ($event.target.checked) {
      this.tempArray.push(cuisine);
    } else {
      let i: number = 0;
      this.tempArray.forEach((item: any) => {     
        if (item == cuisine) {
          this.tempArray.splice(i, 1);
          return;
        }
        i++;
      });
    }
    this.cuisineSelected.emit(this.tempArray);
  } 
}
