import EmailProvider from './EmailProvider.js';
import type { IEmailOptions } from './types.js';

export default class EmailProviderLog extends EmailProvider {
    async send(options: IEmailOptions): Promise<void> {
        console.log("Message sent: ", options);
    }
}
