import nodemailer from "nodemailer";
import { mail_data, mail_sup } from './constants';
// async..await is not allowed in global scope, must use a wrapper
export async function sendReq(html: string) {
    if (html != '') {
        let transporter = nodemailer.createTransport({
            host: mail_data.url,
            port: mail_data.port,
            secure: true, // true for 465, false for other ports
            auth: {
              user: mail_data.user, // generated ethereal user
              pass: mail_data.pass, // generated ethereal password
            },
          });          
    // send mail with defined transport object
    await transporter.sendMail({
        from: '"Auto TraidService" <auto@traidservice.ru>', // sender address
        to: mail_sup, // list of receivers
        subject: "Новый запрос!", // Subject line
        html
      });  
    }
}
