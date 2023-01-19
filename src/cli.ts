import Configstore from 'configstore';
import CLI from 'clui';
import { createStartScreen } from './helper/ui.helper';
import * as pkg from '../package.json';

const Spinner = CLI.Spinner;
const conf = new Configstore(pkg.name);

console.log(conf);
createStartScreen();

export const cli = async (args) => {
  const status = new Spinner('Authenticating...');
  //   status.start();
  // try {
  //   await client.login();
  //   conf.set(credentials);
  //   status.stop();
  //   console.log(chalk.green('Logged in ✅'));
  //   const answer = await askPDF();
  //   if (answer.pdf) {
  //     // get the date via inquirer
  //     downloadPDF(client);
  //   } else {
  //     // get mails and send to BAUER
  //     sendMail(client);
  //   }
  // } catch (e) {
  //   console.log('\n' + chalk.red('Invalid Credentials please try again!'));
  // }
  status.stop();
};

// const downloadPDF = async (client) => {
//   // fixme: command prompt won't open instantly
//   console.log(chalk.blue('Please enter the beginning of your Schoolyear (Press =>): '));
//   const value = await inquirer.askDate();
//   const date = new Date(value.date);
//   const URL = await client.getPdfOfAbsentLesson(date, new Date(), true);
//   console.log(
//     chalk.blue(
//       'Please copy and paste the following link into your Browser and login into Webuntis, if you are not redirected to the page you should go to the link again! Sorry for this
//     ) + URL
//   );
// };
//
// const sendMail = async (client) => {
//   // Implement NodeMailer
//   console.log(chalk.blue('Please enter the email of your teacher (Press =>): '));
//   const email = await inquirer.askEmail();
//   console.log(email);
//   console.log(chalk.blue('Please enter the beginning of your Schoolyear (Press =>): '));
//   const value = await inquirer.askDate();
//   const date = new Date(value.date);
//   // FIXME: Bug within the WebUntisLibrary
//   const absences = await client
//     .getAbsentLesson(new Date(2021, 9, 13), new Date(), true)
//     .catch((e) => console.log(e));
//   // TODO: doesn't get
// };
