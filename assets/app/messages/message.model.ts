export class Message {
    content: string;
    userName: string;
    messageId?: string;
    userId?: string;

    constructor(content: string, username:string, messageID?: string, userId?: string) {
        this.content = content;
        this.userName = username;
        this.messageId = messageID;
        this.userId = userId;
    }
}