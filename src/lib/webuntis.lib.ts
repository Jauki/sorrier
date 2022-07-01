const Configstore = require('configstore');
const inq = require('./inquirer.lib.ts');
const pkg = require('../../package.json');
import WebUntis from 'webuntis';
const conf = new Configstore(pkg.name);

module.exports = {
  getClient: async () => {
    const credentials = await inq.askCredentials();
    const client = new WebUntis(
      credentials.schoolname,
      credentials.username,
      credentials.password,
      credentials.baseurl
    );

    return client;
  },
};
