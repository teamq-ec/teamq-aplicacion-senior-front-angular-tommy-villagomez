import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CategoriesService } from '../../services/categories.service'; 
import Category from '../../models/category.model'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  readonly VISIBLE_CATEGORIES = 14;
  categories: Category[] = [];
  currentIndex = 0;
  totalCategories = 0;
  translateValue = '0px'; 
  direction = 'prev';

  constructor(private categoriesService: CategoriesService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((data: Category[]) => {
      this.categories = data; 
      this.totalCategories = data.length;
    });
  }




  moveSlide(direction: string) {
    const slideWidth = 65;
        
    const startIndex = this.currentIndex;
    let endIndex = this.currentIndex + this.VISIBLE_CATEGORIES;

    if(this.currentIndex >= 0 && endIndex <= (this.totalCategories - 1)) {
        this.direction = 'next';
        this.currentIndex = this.totalCategories - (this.totalCategories - endIndex + 1)
    } 
    else if(endIndex >= this.totalCategories - 1) {
      this.direction = 'prev';
      this.currentIndex -= (this.VISIBLE_CATEGORIES - 1)
    }    
  
    // Calcular translateValue basado en el índice del ngFor
    const translateIndex = this.direction === 'next' ? startIndex : this.currentIndex;
    this.translateValue = `-${translateIndex * slideWidth}px`; // Actualizar el valor de transformación
  }
  


}
