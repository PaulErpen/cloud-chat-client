import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate() {
        return this.authenticationService.hasValidLogin()
            .then(
                (res) => this.decideRedirect(res)
            );
    }

    decideRedirect(res) {
        if(res) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}