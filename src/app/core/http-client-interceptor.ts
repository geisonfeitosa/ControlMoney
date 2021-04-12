import {
    HttpEvent, HttpHandler,
    HttpInterceptor, HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WalletService } from '../services/wallet.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private walletService: WalletService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.walletService.loadingEmitter.emit(true);
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.walletService.loadingEmitter.emit(false);
                }
            }, () => {
                this.walletService.loadingEmitter.emit(false);
            }));
    }

}
