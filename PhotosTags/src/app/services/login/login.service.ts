import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { CustomAlertComponent } from '../../components/custom-alert/custom-alert.component';
import { Alert } from '../../models/Alert';
import { Credentials } from '../../models/Credentials';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  login(credentials: Credentials) {
    //const alreadyLogged = localStorage.getItem('logged') == "true";

    if (this.CheckCredentials(credentials)) {
      this.validCredentials();
    } else {
      this.invalidCredentials();
    }
  }

  logout() {
    this.authService.logout();
  }

  CheckCredentials(credentials: Credentials) {
    return (
      credentials.email.toLowerCase().trim() == environment.adminEmail &&
      credentials.password.toLowerCase().trim() == environment.adminPassword
    );
  }

  private validCredentials() {
    this.authService.login();
  }

  private invalidCredentials() {
    const config = {
      data: {
        title: 'Login inválido',
        description: 'A senha e/ou o email estão inválidos.',
        colorBtnSuccess: 'warn',
        btnSuccess: 'Fechar',
      } as Alert,
    };
    this.dialog.open(CustomAlertComponent, config);
  }
}
