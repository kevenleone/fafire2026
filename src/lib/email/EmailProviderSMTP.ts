import nodemailer from "nodemailer";

import EmailProvider from './EmailProvider.js';
import type { IEmailOptions } from './types.js';

const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export default class EmailProviderSMTP extends EmailProvider {
    async send(options: IEmailOptions): Promise<void> {
        const info = await transporter.sendMail({
            from: options,
            to: options.to,
            subject: options.subject,
            text: options.text,
            html: options.html,
        });

        console.log("Message sent: %s", info.messageId);
    }
}
const emailProviderSMTP = new EmailProviderSMTP();

emailProviderSMTP.send(
    {
        html: "<h1>Welcome</h1>",
        subject: "Fafire Class",
        to: "kevenleone.me@gmail.com",
        from: "Keven Leone <kevenleone.me@gmail.com>"
    })