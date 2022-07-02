const inq = require('./inquirer.lib.ts');
import WebUntis from 'webuntis';
const Configstore = require('configstore');
const pkg = require('../../package.json');
const conf = new Configstore(pkg.name);

module.exports = {
  getClient: async () => {
    let credentials = null;
    if (conf.get().schoolname != null) {
      // FixMe: implement a better solution
      credentials = conf.get();
    } else {
      credentials = await inq.askCredentials();
    }

    const client = new WebUntis(
      credentials.schoolname,
      credentials.username,
      credentials.password,
      credentials.baseurl
    );

    return [
      client,
      {
        schoolname: credentials.schoolname,
        username: credentials.username,
        password: credentials.password,
        baseurl: credentials.baseurl,
      },
    ];
  },
};
