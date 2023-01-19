#!/usr/bin/env node
import { createStartScreen } from './helper/ui.helper.js';
import { getClient } from './lib/webuntis.lib.js';
import pdf from 'html-pdf';
import { createHTMLString } from './helper/html.helper.js';
import * as fs from 'fs';

/**
 * Make User login through the CLI
 * then make a call like sorrier -> he checks all the missing lessons
 * $ sorrier -f -> chooses a random excuse
 */

createStartScreen();
const [client, credentials] = await getClient();
console.log('Welcome ' + credentials.username + '!');

const date = new Date().setFullYear(new Date().getFullYear() - 1);
await client.login();

const days = await client.getAbsentLesson(new Date(date), new Date());
const html: string = createHTMLString(days);

pdf.create(html, { format: 'A4' }).toBuffer((err, buffer) => {
  if (err) return console.log(err);
  const desktopPath = `${process.env.HOME}/Desktop/`;
  fs.writeFile(`${desktopPath}abwesenheit_${new Date().getMonth()}.pdf`, buffer, (error) => {
    if (error) return console.log(error);
    console.log('PDF saved to desktop');
  });
});

// const contentOfEmail = new EmailHelper(
//   'jaujuc18@htl-kaindorf.at',
//   'blamac18@htl-kaindorf.at',
//   'Fehlstunden',
//   'Blaui',
//   'Julian Jauk',
//   days
// );
//
// const smtpOptions: SMTPTransport.Options = {
//   host: 'sigadev.max.todo',
//   port: 420,
//   secure: false,
//   auth: {
//     user: 'foo - dotdenv',
//     pass: 'foo!',
//   },
// };
//
// console.log(sendMail(smtpOptions, contentOfEmail.createEmailOptions()));
