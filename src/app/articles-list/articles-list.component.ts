import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';


const NEWS_CATEGORIES = [
  {
    viewValue: 'Business',
    value: 'b'
  },
  {
    viewValue: 'Science and Technology',
    value: 't'
  },
  {
    viewValue: 'Entertainment',
    value: 'e'
  },
  {
    viewValue: 'Health',
    value: 'm'
  }
];

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  articles: Article[] = [];
  categories: any[] = NEWS_CATEGORIES;
  allPublishers: string[] = [];
  isSortedNewToOld: Boolean;


  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe((articles: Article[]) => {
      this.articles = articles;
      this.articles.map((article: Article) => {
        if (this.allPublishers.indexOf(article.PUBLISHER) === -1) {
          this.allPublishers.push(article.PUBLISHER);
        }
      });
    })
  }

  sortArticles() {
    if (this.isSortedNewToOld){
      this.articles.sort((a, b) => a.TIMESTAMP - b.TIMESTAMP)
      this.isSortedNewToOld = false;
    } else {
      this.articles.sort((a, b) => b.TIMESTAMP - a.TIMESTAMP)
      this.isSortedNewToOld = true;
    }
    
  }


}
