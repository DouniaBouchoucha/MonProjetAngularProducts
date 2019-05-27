import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/domain/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

 products: IProduct[] = [
   { id: 'P100', name : 'Cafe', unitPrice: 2.5},
   { id: 'P200', name : 'the', unitPrice: 2},
   { id: 'P300', name : 'Coca', unitPrice: 2.5},
   ];

  constructor() { }

}
