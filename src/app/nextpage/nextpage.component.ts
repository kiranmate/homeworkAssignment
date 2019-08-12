import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  date = new FormControl(new Date());
  date1 = new FormControl(new Date());
  
  serializedDate = new FormControl((new Date()).toISOString());
  serializedDate1 = new FormControl((new Date()).toISOString());
  
  public equipment:Array<string> = ['PTO Driven Equipment', 'Driven', 'Equipment', 'PTO Driven Equipment'
];


public arrselect:Array<string> = ['select', 'select'
];

}
