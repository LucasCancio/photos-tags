import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/app/models/Credentials';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit(): void {
    this.createForm(this.createEmptyLogin());
  }

  send(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const credentials = this.form.getRawValue() as Credentials;

    if (this.form.valid) {
      this.loginService.login(credentials);
    }
  }

  focus(): void {
    console.log("Teste");
    this.form.markAllAsTouched();
    if (this.form.invalid) {
     
    } else {
      
    }
  }

  reset(): void {
    this.form.reset();
  }

  private createForm(login: Credentials): void {
    this.form = this.fb.group({
      email: [login.email, [Validators.required, Validators.email]],
      password: [
        login.password,
        [Validators.required, Validators.minLength(4)],
      ],
    });
  }

  private createEmptyLogin(): Credentials {
    return {
      email: '',
      password: '',
    } as Credentials;
  }
}
