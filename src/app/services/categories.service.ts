import { Injectable } from '@angular/core';
import  Category  from '../models/category.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of([
      { name: 'Events & Veranstaltungen', image: 'assets/images/cat2.jpg' },
      { name: 'Freizeit & Urlaub', image: 'assets/images/cat3.jpg' },
      { name: 'Gesundheit & Hygiene', image: 'assets/images/cat4.jpg' },
      { name: 'Haus & Garten', image: 'assets/images/cat4.jpg' },
      { name: 'Jahreszeiten & Feiertage', image: 'assets/images/cat4.jpg' },
      { name: 'Lebensmittel & Getranke', image: 'assets/images/cat4.jpg' },
      { name: 'Sport & Spiele', image: 'assets/images/cat4.jpg' },
      { name: 'Streuartikel & Promotion', image: 'assets/images/cat4.jpg' },
      { name: 'Haus & Garten', image: 'assets/images/cat4.jpg' },
      { name: 'Streuartikel & Promotion', image: 'assets/images/cat4.jpg' },
      { name: 'Events & Veranstaltungen', image: 'assets/images/cat2.jpg' },
      { name: 'Gesundheit & Hygiene', image: 'assets/images/cat4.jpg' },
      { name: 'Jahreszeiten & Feiertage', image: 'assets/images/cat4.jpg' },
      { name: 'Lebensmittel & Getranke', image: 'assets/images/cat4.jpg' },
      { name: 'Haus & Garten', image: 'assets/images/cat4.jpg' },
      { name: 'Jahreszeiten & Feiertage', image: 'assets/images/cat4.jpg' },
      { name: 'Lebensmittel & Getranke', image: 'assets/images/cat4.jpg' },
      { name: 'Gesundheit & Hygiene', image: 'assets/images/cat4.jpg' },
      { name: 'Haus & Garten', image: 'assets/images/cat4.jpg' },
      { name: 'Streuartikel & Promotion', image: 'assets/images/cat4.jpg' },
      { name: 'Events & Veranstaltungen', image: 'assets/images/cat2.jpg' },
      { name: 'Gesundheit & Hygiene', image: 'assets/images/cat4.jpg' },
      { name: 'Jahreszeiten & Feiertage', image: 'assets/images/cat4.jpg' },
      { name: 'Lebensmittel & Getranke', image: 'assets/images/cat4.jpg' },
    ]);
  }
}