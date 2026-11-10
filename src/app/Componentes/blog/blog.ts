import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article, Category } from '../../core/services/mock-data.service';
import { MockDataService } from '../../core/services/mock-data.service';
import { ArticleCard } from '../../shared/article-card/article-card';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, ArticleCard],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit {
  articles: Article[] = [];
  categories: Category[] = [];
  selectedCategory: string = '';
  loading = true;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.loadArticles();
    this.loadCategories();
  }

  loadArticles() {
    this.loading = true;
    if (this.selectedCategory) {
      this.mockDataService.getArticlesByCategory(this.selectedCategory).subscribe(
        articles => {
          this.articles = articles;
          this.loading = false;
        },
        error => {
          console.error('Error loading articles:', error);
          this.loading = false;
        }
      );
    } else {
      this.mockDataService.getAllArticles().subscribe(
        articles => {
          this.articles = articles;
          this.loading = false;
        },
        error => {
          console.error('Error loading articles:', error);
          this.loading = false;
        }
      );
    }
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

  selectCategory(category: string) {
    this.selectedCategory = category === this.selectedCategory ? '' : category;
    this.loadArticles();
  }
}
