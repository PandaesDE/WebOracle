import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/oracle/oracle.component').then(m => m.OracleComponent)
    },
    {
        path: 'data-transparency',
        loadComponent: () => import('./pages/data-transparency/data-transparency.component').then(m => m.DataTransparencyComponent)
    },
    {
        path: 'imprint',
        loadComponent: () => import('./pages/imprint/imprint.component').then(m => m.ImprintComponent)
    },
    {
        path: 'blog',
        loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent)
    },
    {
        path: 'blog/:slug',
        loadComponent: () => import('./pages/article/article.component').then(m => m.ArticleComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
