import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message-structure/message.component';
import { MessageInputComponent } from './messages/message-input-component/message-input.component';
import { MessageListComponent } from './messages/message-list-component/message-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { MessagesComponent } from './messages/messages/messages.component';
import { routing } from './app.routing';
import { AuthenticationComponent, LogoutComponent, SigninComponent, SignupComponent } from './auth';
import { AuthService } from './auth/auth.service';

import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageInputComponent,
        MessageListComponent,
        AuthenticationComponent,
        HeaderComponent,
        MessagesComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent,
        ErrorComponent
    ],
    imports: [BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule],
        providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}