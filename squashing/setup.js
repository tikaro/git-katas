'use strict';
/* eslint-disable no-console */
const spawn = require('child_process').spawnSync;
const kata="squashing"

// Remove existing exercise, if it exists, and make a clean repo
spawn('rm -rf exercise/', { shell: true, stdio: 'inherit' });
console.log(`Setting up exercise \'${kata}\'...`);
spawn('git init exercise', { shell: true, stdio: 'inherit' });

// Set up the exercise
spawn(`cd exercise && echo firstfile.txt > firstfile.txt && git add firstfile.txt && git commit -m "Add firstfile.txt with a relevant fact"`, { shell: true, stdio: 'inherit' });

spawn(`cd exercise && echo Fact one > secondfile.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add secondfile.txt && git commit secondfile.txt -m "Add secondfile.txt with a relevant fact\n"`, { shell: true, stdio: 'inherit' });

spawn(`cd exercise && echo Fact two >> secondfile.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add secondfile.txt && git commit -m "Add additional relevancy"`, { shell: true, stdio: 'inherit' });

spawn(`cd exercise && echo Fact three >> secondfile.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add secondfile.txt && git commit -m "Add the third fact"`, { shell: true, stdio: 'inherit' });

spawn(`cd exercise && echo Fact four >> secondfile.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add secondfile.txt && git commit -m "Whoops, forgot about fact four"`, { shell: true, stdio: 'inherit' });

spawn(`cd exercise && echo Fact five >> secondfile.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add secondfile.txt && git commit -m "Here's the last fact, I promise."`, { shell: true, stdio: 'inherit' });

spawn(`cd exercise && echo Fact six >> secondfile.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add secondfile.txt && git commit -m "Darn, I forgot a fact. BELGIUM!"`, { shell: true, stdio: 'inherit' });

console.log(`Setup of exercise ${kata} complete!`);