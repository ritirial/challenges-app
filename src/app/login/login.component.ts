import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  correo: any;
  contrasena: any;

  alertaLogin: any;

  constructor(private router: Router) { }

  iniciarSesion() {
    if (this.verificarCorreo(this.correo) && this.contrasena && this.contrasena.length > 0) {
      this.alertaLogin = "";
      this.router.navigate(['dashboard']);
    } else {
      this.alertaLogin = "Datos de usuario incorrectos";
    }
  }

  verificarCorreo(texto: string) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(texto);
  }
}
