import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { DealerBranch } from './dealerBranch';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { NextpageComponent } from './nextpage/nextpage.component';
//import { NextpageComponent } from './nextpage/nextpage.component';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
/*
  properties: [
    'allowClear',
    'placeholder',
    'items',
    'multiple',
    'showSearchInputInDropdown']
*/
})
export class AppComponent implements OnInit {
  title = 'Homework-Assign';

  date = new FormControl(new Date());
  
  serializedDate = new FormControl((new Date()).toISOString());

  dealerbranch:DealerBranch[]=[
    {id:1,branchName:'Dealer Branch/Outlet'},
    {id:2,branchName:'Dealer Branch'},
    {id:3,branchName:'Outlet'},
    {id:4,branchName:'Dealer Branch/Outlet'}
    ];

  products = new FormControl();
  productsList = ['Prod1', 'Prod2', 'Prod3', 'Prod4', 'Prod5', 'Prod6'];
  productsToReturn = [];

////////////////////////////////////////////



foods: Food[] = [
  {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'}
];


dropdownList = [];
selectedItems = [];
dropdownSettings = {};
ngOnInit() {
  this.dropdownList = [
    { item_id: 1, item_text: 'Wheat' },
    { item_id: 2, item_text: 'Rice' },
    { item_id: 3, item_text: 'Jawar' },
    { item_id: 4, item_text: 'PeaNuts' }
   
  ];
  this.selectedItems = [
    { item_id: 3, item_text: 'Pune' },
    { item_id: 4, item_text: 'Navsari' }
  ];
  this.dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
 
 
}
onItemSelect(item: any) {
  console.log(item);
}
onSelectAll(items: any) {
  console.log(items);
}
//code for dropdown ngselect
public items:Array<string> = ['Sales Officer', 'Sales', 'Officer', 'Sales Officer'
    ];

private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
 
  private get disabledV():string {
    return this._disabledV;
  }
 
  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }
 
  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }
 
  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
 
  public typed(value:any):void {
    console.log('New search input: ', value);
  }
 
  public refreshValue(value:any):void {
    this.value = value;
  }
//

public arrsource:Array<string> = ['Dealer Branch', 'Outlet', 'Dealer', 'Branch'
    ];

    constructor(private router:Router){}
    onNext()
    {
      this.router.navigate(['/next'])
     
    }

  

}
