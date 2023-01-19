import { createTransport } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport/index.js';
import { MailOptions } from 'nodemailer/lib/smtp-pool/index.js';

export const sendMail = async (smtpOptions: SMTPTransport.Options, mailContent: MailOptions) => {
  const transporter = createTransport(smtpOptions);
  const info = await transporter.sendMail(mailContent);
  return info.response;
};
