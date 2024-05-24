import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BrandsModule} from './components/brands/brands.module';
import {NewsModule} from './components/news/news.module';
import {CategoriesModule} from './components/categories/categories.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrandsModule,
    NewsModule,
    CategoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }