'use strict';
/* eslint-disable no-console */
var chalk = require('chalk');
var downloadGitRepo = require('download-git-repo');
var path = require('path');
var fs = require('fs');
var exists = fs.existsSync;
var shell = require('shelljs');
var inquirer = require('inquirer');

var proInitDone = function () {
    console.log('Project init '+chalk.green.bold('done')+'!');
};

var next = function (projectName, projectSeedPath, isFromLocal, clone) {
    console.log(chalk.green('projectName') + ':', chalk.green.bold(projectName) + '\n');
    console.log(chalk.yellow('projectSeedPath') + ':', chalk.yellow.bold(projectSeedPath) + '\n');
    console.log(chalk.cyan('isFromLocal') + ':', chalk.cyan.bold(!!isFromLocal) + '\n');
    console.log(chalk.cyan('clone') + ':', chalk.cyan.bold(!!clone) + '\n');
    
    var proNameAbsPath = path.resolve(projectName);
    
    if (isFromLocal) {
        shell.cp('-R', path.resolve(projectSeedPath), projectName);
        if (exists(proNameAbsPath)) {
            shell.rm('-rf',path.join(proNameAbsPath,'/.git'));
            shell.rm('-rf',path.join(proNameAbsPath,'/.svn'));
        }
        proInitDone();
        return;
    }
    
    if (/^https?:\/\//i.test(projectSeedPath)) {
        projectSeedPath = projectSeedPath.replace(/\.git$/i,'');
    }
    
    downloadGitRepo(projectSeedPath, projectName, {clone: clone}, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        proInitDone();
    });
};

module.exports = function (projectName, projectSeedPath, isFromLocal, clone) {
    var proNameAbsPath = path.resolve(projectName);
    
    if (exists(proNameAbsPath)) {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'deleteProject',
                message: 'Do you want to delete project ' + chalk.green.bold(projectName) + ' (just hit enter for ' + chalk.yellow.bold('NO') + ')?',
                default: false
            },
            {
                type: 'input',
                name: 'projectName',
                message: 'Please,input different ' + chalk.green.bold('project name') + ':',
                when: function (ans) {
                    return !ans.deleteProject;
                },
                validate: function (input) {
                    if (input.trim() === '') {
                        return 'Input should not be empty!'
                    }
                    
                    if (input.trim() === projectName) {
                        return 'Input should be different!'
                    }
            
                    return true;
                }
            }
        ]).then(function  (ans) {
            if (ans.deleteProject) {
                shell.rm('-rf', proNameAbsPath);
                next(projectName, projectSeedPath, isFromLocal, clone);
            }else{
                projectName = ans.projectName;  // new projectName
                next(projectName, projectSeedPath, isFromLocal, clone);
            }
        });
    }
};
