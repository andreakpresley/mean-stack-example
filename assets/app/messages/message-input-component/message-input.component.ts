import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MessageService } from '../message.service';
import { Message } from '../message.model';

@Component({
    selector: 'message-input',
    templateUrl: 'message-input.html',
    styleUrls: ['./message-input.css']
})
export class MessageInputComponent implements OnInit {
    message: Message;

    constructor(private messageService: MessageService) { }


    onSubmit(form: NgForm) {
        if (this.message) {
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result)
                )
            this.message = null;
        } else {
            const message = new Message(form.value.content, 'Max');
            this.messageService.addMessage(message)
                .subscribe(
                data => console.log(data),
                error => console.error(error)
                );
        }

        form.resetForm();
    }
    onClear(form: NgForm) {
        form.resetForm();
        this.message = null;
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }
}
