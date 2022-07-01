const inquirer = require('inquirer');

module.exports = {
  askCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your Webuntis Username:',
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your Username! ❌';
          }
        },
      },
      {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your password. ❌';
          }
        },
      },
      {
        name: 'schoolname',
        type: 'input',
        message: 'Enter your school:',
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your school. ❌';
          }
        },
      },
      {
        name: 'baseurl',
        type: 'input',
        message: 'Enter your webuntis baseUrl (mese.webuntis.com):',
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your baseUrl. ❌';
          }
        },
      },
    ];

    return inquirer.prompt(questions);
  },

  askPDF: () => {
    const question = [
      {
        name: 'pdf',
        type: 'list',
        message:
          'Do you want to excuse your Absent lesson via PDF and send the PDF by yourself?',
        choices: ['Yes', 'No (18 +)'],
      },
    ];
    return inquirer.prompt(question);
  },
};
