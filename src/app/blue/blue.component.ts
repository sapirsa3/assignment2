import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit {

  selectedCountry:String = "";
  onSelectCountry(country_id: any) {
    this.selectedCountry = country_id;
    
    }
  constructor() { }

  ngOnInit(): void {
  }

}
