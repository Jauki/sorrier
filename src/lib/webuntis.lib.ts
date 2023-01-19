import WebUntis from 'webuntis';
import pkg from '../../package.json';
import Configstore from 'configstore';
import { askCredentials } from './inquirer.lib.js';

const conf = new Configstore(pkg.name);

export const getClient = async () => {
  let credentials = null;
  if (conf.get().schoolname != null) {
    credentials = conf.get();
  } else {
    credentials = await askCredentials();
  }

  const client = new WebUntis(
    credentials.schoolname,
    credentials.username,
    credentials.password,
    credentials.baseurl
  );

  return [client, credentials];
};
