import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from './article';
import { Observable } from 'rxjs';

const NEWS_API_URL = `https://api.myjson.com/bins/10ijyt`;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }
  favoritedArticles: Article[] = [];
  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(NEWS_API_URL)
  }

  addToFavorites(article: Article){
    article.isFavorite = true;
    this.favoritedArticles.push(article);
  }

}
