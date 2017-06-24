'use strict';

var inquirer = require('inquirer');
var chalk = require('chalk');
var downloadGitRepo = require('download-git-repo');

var createQuestion = function  (keyword) {
	return [
        {
            type: 'list',
            name: 'type',
            message: chalk.yellow.blod(keyword) + 'is?',
            choices: [
                'projectName',
                'projectSeedPath'
            ]
        }
    ]
};

module.exports = function  (projectName, projectSeedPath, isFromLocal) {
    var keyword;
    if (!(projectName && projectSeedPath)) {
        keyword = projectName || projectSeedPath;
        if (keyword) {
            console.log(keyword);
        }else{
            console.log(keyword);
        }
    }
};
