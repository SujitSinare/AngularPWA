import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Implemetation Lazy Loading
const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./module/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'user-list',
    loadChildren: () =>
      import('./module/user-list/user-list.module').then(
        (m) => m.UserListModule
      ),
  },
  {
    path: '**',
    redirectTo: 'user-list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
