import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Article, Category } from '../../core/services/mock-data.service';
import { MockDataService } from '../../core/services/mock-data.service';
import { NewsletterForm } from '../../shared/newsletter-form/newsletter-form';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, RouterLink, NewsletterForm],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css'
})
export class BlogDetails implements OnInit {
  article: Article | undefined;
  categories: Category[] = [];
  loading = true;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private mockDataService: MockDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.loadArticle(id);
      this.loadCategories();
    });
  }

  loadArticle(id: number) {
    this.loading = true;
    this.mockDataService.getArticleById(id).subscribe(
      article => {
        if (article) {
          this.article = article;
          this.notFound = false;
        } else {
          this.notFound = true;
        }
        this.loading = false;
      },
      error => {
        console.error('Error loading article:', error);
        this.notFound = true;
        this.loading = false;
      }
    );
  }

  loadCategories() {
    this.mockDataService.getAllCategories().subscribe(
      categories => {
        this.categories = categories;
      },
      error => {
        console.error('Error loading categories:', error);
      }
    );
  }
}
