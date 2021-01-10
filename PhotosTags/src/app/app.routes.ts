import { Routes } from '@angular/router';
import { LoggedLayoutComponent } from './layouts/logged-layout/logged-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { UsersComponent } from './pages/users/users.component';
import { AuthGuard } from './services/login/auth.guard';

export const rootRouterConfig: Routes = [
  {
    path: '',
    component: LoggedLayoutComponent,
    canActivate: [AuthGuard], //Se não estiver logado, é redirecionado pra pagina Login
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
      },
      {
        path: 'home',
        redirectTo: 'users',
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'photos',
        component: PhotosComponent,
      }
    ],
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
