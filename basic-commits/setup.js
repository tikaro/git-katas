'use strict';
/* eslint-disable no-console */
const spawn = require('child_process').spawnSync;

const kata="basic-commit-master"

// Set up the repository
console.log(`Removing any existing exercise folder with 'rm -rf exercise/'...`);
spawn('rm -rf exercise/', { shell: true, stdio: 'inherit' });

console.log(`Creating a git repository with 'git init exercise'...`);
spawn('git init exercise', { shell: true, stdio: 'inherit' });

// Any additional setup goes here


// Instructions and next steps
console.log(`Kata '${kata}' is set up in folder exercise/.`)
console.log('Next you should open README.md and follow the prompts.')
