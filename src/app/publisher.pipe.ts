import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article';

@Pipe({
  name: 'publisher'
})
export class PublisherPipe implements PipeTransform {

  transform(allArticles: Article[], publisher?: string): Article[] {
    if (publisher){
      return allArticles.filter((article: Article) => article.PUBLISHER === publisher);
    }
    return allArticles;
  }

}
