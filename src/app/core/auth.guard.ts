import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        return true;
        // if (localStorage.getItem('access_token') != null) {
        //     return true;
        // }
        // this.router.navigate(['/authentication/login']);
        // return false;
    }
}
