import { Routes } from '@angular/router';
import { Home } from './Componentes/home/home';
import { Blog } from './Componentes/blog/blog';
import { BlogDetails } from './Componentes/blog-details/blog-details';
import { Topics } from './Componentes/topics/topics';
import { Resourses } from './Componentes/resourses/resourses';
import { Login } from './Componentes/login/login';
import { Signup } from './Componentes/signup/signup';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: Blog },
  { path: 'blog/:id', component: BlogDetails },
  { path: 'topics', component: Topics },
  { path: 'resources', component: Resourses },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: '**', redirectTo: '' }
];
