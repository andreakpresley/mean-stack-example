import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'logout',
    templateUrl: 'logout.component.html',
    styleUrls: ['logout.component.css']
})
export class LogoutComponent {
    constructor( private authService: AuthService, private router: Router) {}
    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }
}
