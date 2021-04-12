import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styles: [
  ]
})
export class ForgotComponent implements OnInit, OnDestroy {

  logo = "assets/images/logo.png";

  constructor(
    private messageService: MessageService
  ) { }
  
  ngOnInit(): void {
    document.body.style.backgroundColor = "#2b2b2b";
  }

  ngOnDestroy() {
    document.body.style.backgroundColor = "#fff";
  }
  
  enviar() {
    this.messageService.add({sticky: true, severity:'success', summary:'ControlMoney', detail:'Em breve você receberá um e-mail com a recuperação da sua senha'});
  }

}
