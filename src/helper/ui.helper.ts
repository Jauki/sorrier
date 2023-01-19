import chalk from 'chalk';
import { clear } from 'node:console';
import pkg from '../../package.json';

export const createStartScreen = () => {
  clear();
  console.log(chalk.blue(pkg.name));
  console.log(pkg.description);
  console.log(chalk.blueBright(pkg.author));
};
