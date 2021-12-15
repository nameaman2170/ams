import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('cityName') 
  cityName: any="";
  @Input('imageSource') 
  imageSource:any="";
  @Input('source') 
  source:any="";
  @Input('sourceAb') 
  ab1:any="";
  @Input('dest') 
  dest:any="";
  @Input('destAb') 
  ab2:any="";
  
  @Input('currency') 
  currency:any="";
  @Input('price1') 
  price1:any="";
  @Input('price2') 
  price2:any="";
  @Input('price3') 
  price3:any="";
  
  topData:any=
    {
      imageSource: this.imageSource,
      cityName: this.cityName,
      source: this.source,
      ab1: this.ab1,
      dest: this.dest,
      ab2: this.ab2
    };

  bottomData:any=
    {
      currency: this.currency,
      price1: this.price1,
      price2: this.price2,
      price3: this.price3
    };

  constructor() { }
  ngOnInit(): void { }
}
