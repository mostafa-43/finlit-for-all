import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../core/services/mock-data.service';
import { MockDataService } from '../../core/services/mock-data.service';
import { ArticleCard } from '../../shared/article-card/article-card';
import { NewsletterForm } from '../../shared/newsletter-form/newsletter-form';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ArticleCard, NewsletterForm],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  featuredArticles: Article[] = [];
  loading = true;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.mockDataService.getFeaturedArticles(3).subscribe(
      articles => {
        this.featuredArticles = articles;
        this.loading = false;
      },
      error => {
        console.error('Error loading featured articles:', error);
        this.loading = false;
      }
    );
  }
}
