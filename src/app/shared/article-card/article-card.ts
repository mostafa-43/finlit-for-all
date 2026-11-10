import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Article } from '../../core/services/mock-data.service';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-card.html',
  styleUrl: './article-card.css'
})
export class ArticleCard {
  @Input() article!: Article;
}
