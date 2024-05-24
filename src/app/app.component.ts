import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BrandsModule} from './components/brands/brands.module';
import {NewsModule} from './components/news/news.module';
import {CategoriesModule} from './components/categories/categories.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrandsModule, NewsModule, CategoriesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
