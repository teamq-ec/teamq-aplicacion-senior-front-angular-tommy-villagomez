
import { Injectable } from '@angular/core';
import  News  from '../models/new.model'; 
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews(): Observable<News[]> {
    return of([
      { title: 'NEUHEITEN', content: 'HEADLINE 2' },
      { title: 'IDEEN FINDER', content: 'HEADLINE 2' },
      { title: 'BESTSELLERS', content: 'HEADLINE 2' },
      { title: 'ARTIKEL DES MONATS ', content: 'HEADLINE 2' }
    ]);
  }
}
