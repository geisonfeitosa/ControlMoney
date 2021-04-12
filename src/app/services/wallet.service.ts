import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  loadingEmitter = new EventEmitter();

  constructor() { }

}
