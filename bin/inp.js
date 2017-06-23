#!/usr/bin/env node

'use strict';
var pkg = require('../package.json');
var program = require('commander');
var args = process.argv.slice(2);
var projectSeedPath,
    projectName;

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

require('../index')(projectName, projectSeedPath, program.local);
