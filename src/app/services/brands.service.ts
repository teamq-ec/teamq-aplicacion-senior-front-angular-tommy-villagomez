
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor() { }

  getBrands(): Observable<string[]> {
    return of(['Marke 1', 'Marke 2', 'Marke 3', 'Marke 4', 'Marke 5', 'Marke 6', 'Marke 7', 'Marke 8', 'Marke 9', 'Marke 10', 'Marke 11', 'Marke 12']);
  }
}