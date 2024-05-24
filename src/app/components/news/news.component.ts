// src/app/components/news/news.component.ts
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import  News  from '../../models/new.model'; 

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsList: News[] = []; 

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data: News[]) => {
      this.newsList = data; 
    });
  }
}
