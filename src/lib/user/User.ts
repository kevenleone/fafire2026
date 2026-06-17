import type EmailProvider from "../email/EmailProvider.js";
import EmailProviderLog from "../email/EmailProviderLog.js";

interface IUser {
    email: string;
    id?: string;
    name: string;
    password: Password;
}

type Password = string | number;

type UserWithoutId = Omit<IUser, "id">;

class UserRepository {
    private users: Array<IUser> = [];

    constructor(
       private emailProvider: EmailProvider
    ) {
    }

    getAll() {
        return this.users;
    }

    create(user: UserWithoutId) {
        this.users.push({...user, id: crypto.randomUUID()});
        
        console.log("Usuário criado");

        const subject = "Welcome " + user.name;

        this.emailProvider.send(
            {
                to: user.email, 
                from: "Fafire <noreply@fafire.com>",
                html: `<h1>Welcome... ${user.name}`,
                subject
            }
        )

        return user;
    }
}

const emailProvider = new EmailProviderLog()

const userRepository = new UserRepository(emailProvider);

userRepository.create({
    email: "kevenleone.me@gmail.com", 
    name: "Keven Leone",
    password: 123456
})

console.log(userRepository.getAll())

