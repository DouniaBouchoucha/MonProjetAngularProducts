import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getAllProducts(): IProduct[] {
    return [
     { id: 'P100 from service', name : 'Cafe', unitPrice: 2.5},
    { id: 'P200', name : 'the', unitPrice: 2},
   { id: 'P300', name : 'Coca', unitPrice: 2.5},
  ];
  }
}
