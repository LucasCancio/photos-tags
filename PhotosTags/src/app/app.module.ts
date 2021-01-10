import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { UsersModule } from './pages/users/users.module';
import { CustomFieldComponent } from './components/custom-field/custom-field.component';
import { CustomAlertComponent } from './components/custom-alert/custom-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoggedLayoutComponent } from './layouts/logged-layout/logged-layout.component';
import { PhotosModule } from './pages/photos/photos.module';
import { AuthGuard } from './services/login/auth.guard';
import { AuthService } from './services/login/auth.service';
import { LoginService } from './services/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomFieldComponent,
    CustomAlertComponent,
    LoginComponent,
    LoginLayoutComponent,
    LoggedLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    UsersModule,
    FormsModule,
    PhotosModule,
    ReactiveFormsModule,

    [RouterModule.forRoot(rootRouterConfig, { useHash: false })],
  ],
  providers: [AuthService, LoginService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
