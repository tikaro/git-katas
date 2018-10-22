'use strict';
/* eslint-disable no-console */
const spawn = require('child_process').spawnSync;
const kata="basic-stashing"

spawn('rm -rf exercise/', { shell: true, stdio: 'inherit' });
console.log(`Setting up exercise \'${kata}\'...`);
spawn('git init exercise', { shell: true, stdio: 'inherit' });

spawn('cd exercise && echo "Initial content of the file" > file.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && touch fix.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git add file.txt fix.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git commit -m "Initial commit', { shell: true, stdio: 'inherit' });

spawn('cd exercise && echo "this file haaasss some typos" > bug.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git add bug.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git commit -m "Add bug.txt', { shell: true, stdio: 'inherit' });

spawn('cd exercise && echo "some changes I made and staged" >> file.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git add file.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && echo "some changes I made and did not stage yet" >> file.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && echo "changes I did not stage" > fix.txt', { shell: true, stdio: 'inherit' });

console.log(`Setup of exercise ${kata} complete!`);