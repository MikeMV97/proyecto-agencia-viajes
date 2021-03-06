import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './website/components/layout/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () => import('./website/home/home.module').then(m => m.HomeModule)
    }
  ]
},
{
  path: 'admin',
  //canActivate: [AdminGuard],
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
},
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
{
  path: '**',
  loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
