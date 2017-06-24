'use strict';
/* eslint-disable no-console */
var chalk = require('chalk');
var downloadGitRepo = require('download-git-repo');
var path = require('path');
var fs = require('fs');
var exists = fs.existsSync;
var shell = require('shelljs');

var proInitDone = function () {
    console.log('Project init '+chalk.green.bold('done')+'!');
};

module.exports = function (projectName, projectSeedPath, isFromLocal, clone) {
    console.log(chalk.green('projectName') + ':', chalk.green.bold(projectName) + '\n');
    console.log(chalk.yellow('projectSeedPath') + ':', chalk.yellow.bold(projectSeedPath) + '\n');
    console.log(chalk.cyan('isFromLocal') + ':', chalk.cyan.bold(!!isFromLocal) + '\n');
    console.log(chalk.cyan('clone') + ':', chalk.cyan.bold(!!clone) + '\n');
    
    var proNameAbsPath = path.resolve(projectName);
    
    if (exists(proNameAbsPath)) {
        var err = new Error(chalk.green.bold(projectName) + ' has exists!');
        console.log(err);
        return;
    }
    
    if (isFromLocal) {
        shell.cp('-R', path.resolve(projectSeedPath), projectName);
        proInitDone();
        return;
    }
    
    downloadGitRepo(projectSeedPath, projectName, {clone: clone}, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        proInitDone();
    });
};
