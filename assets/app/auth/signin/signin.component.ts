import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user.model';
import { AuthService } from '../auth.service';

@Component({
    selector: 'signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css']
})
export class SigninComponent implements OnInit{
    signinForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
        const user = new User( this.signinForm.value.email, this.signinForm.value.password);
        this.authService.signin(user) 
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            )

        this.signinForm.reset();
    }

    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl('', [
                Validators.required,
                //Validators.pattern("/^\S+@\S+\.\S+$/") //need to look for better ones
                ]),
            password: new FormControl('', Validators.required)
        });
    }
}
