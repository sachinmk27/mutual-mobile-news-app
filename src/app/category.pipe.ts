import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(allArticles: Article[], category ?: string): Article[] {
    if (category) {
      return allArticles.filter((article: Article) => article.CATEGORY === category)    
    }
    return allArticles;
  }

}
