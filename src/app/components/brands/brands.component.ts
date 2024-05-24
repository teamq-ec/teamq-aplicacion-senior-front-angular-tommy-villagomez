import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands.service'; 

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brands: string[] = [];

  constructor(private brandsService: BrandsService) { }

  ngOnInit(): void {
    this.brandsService.getBrands().subscribe((data: string[]) => {
      this.brands = data; 
    });
  }
}