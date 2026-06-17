export interface IEmailOptions {
    from?: string;
    html: string;
    subject: string;
    text?: string;
    to: string;
}

export interface IEmailProvider {
    send(options: IEmailOptions): Promise<void>;
}
