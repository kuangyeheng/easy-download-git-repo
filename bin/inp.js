#!/usr/bin/env node

'use strict';
var inquirer = require('inquirer');
var chalk = require('chalk');
var program = require('commander');
var run = require('../index.js');


var pkg = require('../package.json');
var projectSeedPath = undefined,
    projectName = undefined;

program
    .version(pkg.version)
    .usage('[options] <project-name> <project-seed-path>')
    .option('-l, --local', 'Copy from local')
    .parse(process.argv);

if (program.args.length > 2) {
    program.help();
}

if (program.args[0]){
    projectName = program.args[0];
}

if (program.args[1]){
    projectSeedPath = program.args[1];
}


var createQuestion = function  () {
    return [
        {
            type: 'list',
            name: 'type',
            message:  'What is ' + chalk.magenta.bold(projectName || projectSeedPath) + ' ?',
            choices: [
                {
                    name: '(1) projectName',
                    value: 'projectName'
                },
                {
                    name: '(2) projectSeedPath',
                    value: 'projectSeedPath'
                }
            ],
            when: function () {
                if (projectName && projectSeedPath) {
                    return false;
                }
                
                if (!(projectName || projectSeedPath)) {
                    return false;
                }
                
                return true;
            }
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'Please,input your '+chalk.green.bold('project name')+':',
            when: function (ans) {
                if (projectName && projectSeedPath) {
                    return false;
                }
                
                return (ans.type === 'projectSeedPath') || (ans.type === undefined);
            }
        },
        {
            type: 'input',
            name: 'projectSeedPath',
            message: 'Please,input your '+chalk.yellow.bold('project-seed path')+':',
            when: function (ans) {
                if (projectName && projectSeedPath) {
                    return false;
                }
                
                return (ans.type === 'projectName') || (ans.type === undefined);
            }
        }
    ]
};

if (!(projectName && projectSeedPath)) {
    inquirer.prompt(createQuestion()).then(function (ans) {
        console.log(ans);
    });
}else{
    run(projectName, projectSeedPath, program.local);
}
