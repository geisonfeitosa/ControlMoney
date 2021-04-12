import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit, OnDestroy {

  logo = "assets/images/logo.png";

  constructor(
    private messageService: MessageService,
    private router: Router,
  ) { }
  
  ngOnInit(): void {
    document.body.style.backgroundColor = "#2b2b2b";
  }

  ngOnDestroy() {
    document.body.style.backgroundColor = "#fff";
  }
  
  logar() {
    this.messageService.add({severity:'success', summary:'ControlMoney', detail:'Seja Bem-vindo!'});
    this.router.navigate(['/']);
  }

}
