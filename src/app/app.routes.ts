import { Route, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => 
      import('./features/home/home.component')
        .then(c => c.HomeComponent)
  },
  {
    path: 'accounts',
    loadComponent: () =>
      import('./features/accounts/accounts.component')
        .then(c => c.AccountsComponent)
  },
  {
    path: 'admin',
    loadChildren: () => 
      import('./features/admin/admin.routes')
        .then(r => r.adminRoutes)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
