import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  CATEGORY_MAP: any = {
    'b': 'Business',
    't': 'Science & Technology',
    'e': 'Entertainment',
    'm': 'Health'
  }

  constructor() { }

  ngOnInit() {
  }

}
