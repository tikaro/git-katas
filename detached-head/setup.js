'use strict';
/* eslint-disable no-console */
const spawn = require('child_process').spawnSync;
const kata="detached-head"

spawn('rm -rf exercise/', { shell: true, stdio: 'inherit' });
console.log(`Setting up exercise \'${kata}\'...`);
spawn('git init exercise', { shell: true, stdio: 'inherit' });

spawn(`cd exercise && echo "file1" > file1.txt && git add file1.txt && git commit -am "Add file1.txt"`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "file2" > file2.txt && git add file2.txt && git commit -am "Add file2.txt"`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "file3" > file3.txt && git add file3.txt && git commit -am "Add file3.txt"`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "file4" > file4.txt && git add file4.txt && git commit -am "Add file4.txt"`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "file5" > file5.txt && git add file5.txt && git commit -am "Add file5.txt"`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git checkout HEAD~3"`, { shell: true, stdio: 'inherit' });

console.log(`Setup of exercise ${kata} complete!`);