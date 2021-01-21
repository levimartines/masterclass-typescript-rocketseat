import {Request, Response} from "express";
import EmailService from "../services/EmailService";

const users = [{
    name: 'Levi', email: 'levi.ferreira@capgemini.com'
}];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: {
                name: 'Levi',
                email: 'levi.ferreira@capgemini.com'
            },
            message: {
                subject: 'Welcome to the group',
                body: 'A random body'
            }
        });
        return res.send();
    }
};
