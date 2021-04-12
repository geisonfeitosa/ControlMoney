import { Component, OnInit } from '@angular/core';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styles: [
  ]
})
export class WalletComponent implements OnInit {

  currentDate: Date = new Date();
  loading = false;

  constructor(
    private walletService: WalletService
  ) { }

  ngOnInit(): void {
    this.walletService.loadingEmitter.subscribe(r => {
      setTimeout(() => this.loading = r);
    });
  }

}
