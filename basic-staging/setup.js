'use strict';
/* eslint-disable no-console */
const spawn = require('child_process').spawnSync;
const kata="basic-staging"

// Remove existing exercise, if it exists, and make a clean repo
spawn('rm -rf exercise/', { shell: true, stdio: 'inherit' });
console.log(`Setting up exercise \'${kata}\'...`);
spawn('git init exercise', { shell: true, stdio: 'inherit' });

// Set up the exercise
spawn('cd exercise && echo 1 > file.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git add file.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git commit -m "1', { shell: true, stdio: 'inherit' });

console.log(`Setup of exercise ${kata} complete!`);