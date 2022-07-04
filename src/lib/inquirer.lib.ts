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
        type: 'confirm',
        message: 'Do you want a PDF (else automatically sent to teacher)?',
      },
    ];
    return inquirer.prompt(question);
  },

  askDate: () => {
    //  Maybe Implement multiple inputs
    const question = [
      {
        name: 'date',
        type: 'input',
        message: 'When did your Schoolyear start? (MM.DD.YYYY)',
      },
    ];

    return inquirer.prompt(question);
  },

  askEmail: () => {
    const question = [
      {
        name: 'email',
        type: 'input',
        message: 'Enter your Teachers email: ',
        validate: function (value) {
          if (value.includes('@')) {
            return true;
          } else {
            return 'Please enter a valid email!';
          }
        },
      },
    ];
    return inquirer.prompt(question);
  },
};
