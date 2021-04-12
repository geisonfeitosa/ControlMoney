import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit, OnDestroy {

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

  registrar() {
    this.messageService.add({sticky: true, severity:'success', summary:'ControlMoney', detail:'Solicitação de registro efetuado com Sucesso. Um e-mail foi enviado, para ativar a conta você deve acessa-lo.'});
    this.router.navigate(['/authentication/login']);
  }

}
