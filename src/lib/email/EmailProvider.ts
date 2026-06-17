import type { IEmailOptions, IEmailProvider } from "./types.js";

export default class EmailProvider implements IEmailProvider {
    async send(options: IEmailOptions): Promise<void> {
        throw new Error("Not implemented.")
    }
}