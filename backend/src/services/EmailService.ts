interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface MessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendMail(request: MessageDTO): void;
}

class EmailService implements IEmailService {
    sendMail({to, message}: MessageDTO) {
        console.log(`Email enviado para ${to.email}: ${message.subject}`);
    }
}

export default EmailService;
