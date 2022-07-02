import clear from 'clear';
import figlet from 'figlet';
import chalk from 'chalk';
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
      await inquirer.askPDF();
    } catch (e) {
      console.log('\n' + chalk.red('Invalid Credentials please try again!'));
    }
    status.stop();
  },
};
