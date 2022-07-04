import clear from 'clear';
import figlet from 'figlet';
import chalk from 'chalk';
import open from 'open';
const CLI = require('clui');
const Spinner = CLI.Spinner;
const inquirer = require('./lib/inquirer.lib.ts');
const webuntis = require('./lib/webuntis.lib.ts');
const Configstore = require('configstore');
const pkg = require('../package.json');
const conf = new Configstore(pkg.name);

// FIXME: save the data if login is successfull
// Todo: Include WebUntis API
// Todo: send Emails :/

clear();
console.log(
  chalk.blue(figlet.textSync('Sorrier', { horizontalLayout: 'full' }))
);
console.log(
  'This app is used to excuse your absent lessons, do not abuse it ^^'
);
console.log(chalk.blueBright('<jaujuc18@htl-kaindorf.at> Julian Jauk'));

module.exports = {
  cli: async (args) => {
    const status = new Spinner('Authenticating...');
    const [client, credentials] = await webuntis.getClient();
    status.start();
    try {
      await client.login();
      conf.set(credentials);
      status.stop();
      console.log(chalk.green('Logged in ✅'));
      let answer = await inquirer.askPDF();
      if (answer.pdf) {
        // get the date via inquirer
        downloadPDF(client);
      } else {
        // get mails and send to BAUER
        sendMail(client);
      }
    } catch (e) {
      console.log('\n' + chalk.red('Invalid Credentials please try again!'));
    }
    status.stop();
  },
};

const downloadPDF = async (client) => {
  // fixme: command prompt won't open instantly
  console.log(
    chalk.blue('Please enter the beginning of your Schoolyear (Press =>): ')
  );
  let value = await inquirer.askDate();
  let date = new Date(value.date);
  let URL = await client.getPdfOfAbsentLesson(date, new Date(), true);
  console.log(
    chalk.blue(
      'Please copy and paste the following link into your Browser and login into Webuntis, if you are not redirected to the page you should go to the link again! Sorry for this bug, but this Feature is still in progress :/ \n'
    ) + URL
  );
};

const sendMail = async (client) => {
  // Implement NodeMailer
  console.log(
    chalk.blue('Please enter the email of your teacher (Press =>): ')
  );
  let email = await inquirer.askEmail();
  console.log(email);
  console.log(
    chalk.blue('Please enter the beginning of your Schoolyear (Press =>): ')
  );
  let value = await inquirer.askDate();
  let date = new Date(value.date);
  let absences = await client
    .getAbsentLesson(new Date(2021, 9, 13), new Date(), true)
    .catch((e) => console.log(e));
  // TODO: doesn't get
};
