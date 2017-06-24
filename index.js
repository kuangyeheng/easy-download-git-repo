'use strict';

var chalk = require('chalk');

module.exports = function (projectName, projectSeedPath, isFromLocal) {
    /* eslint-disable no-console */
    console.log(chalk.green('projectName')+':',chalk.green.bold(projectName)+'\n');
    console.log(chalk.yellow('projectSeedPath')+':',chalk.yellow.bold(projectSeedPath)+'\n');
    console.log(chalk.magenta('isFromLocal')+':',chalk.magenta.bold(!!isFromLocal)+'\n');
    /* eslint-enable no-console */
    
};
