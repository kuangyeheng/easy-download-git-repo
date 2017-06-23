#!/usr/bin/env node

'use strict';
var pkg = require('../package.json');
var program = require('commander');
var args = process.argv.slice(2);
var path;

program
    .version(pkg.version)
    .usage('[options] <path>')
    .option('-l, --local', 'Copy from local')
    .parse(process.argv);

if (program.args.length !== 1) {
    program.help();
}

if (args.length > 1) {
    program.help();
}

path = program.args[0];

require('../index')(path,program.local);
