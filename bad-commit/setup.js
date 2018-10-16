'use strict';
/* eslint-disable no-console */
const spawn = require('child_process').spawnSync;

const kata="kata4-bad-commit"

spawn('rm -rf exercise/', { shell: true, stdio: 'inherit' });

console.log('Setting up exercise \'bad-commit\'...');

spawn('git init exercise', { shell: true, stdio: 'inherit' });

spawn('echo "file1" > exercise/file1.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git add file1.txt && git commit -m "Add File 1"', { shell: true, stdio: 'inherit' });

spawn('echo "file2" > exercise/file2.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git add file2.txt && git commit -m "Add File 2"', { shell: true, stdio: 'inherit' });

spawn('echo "file3" > exercise/file3.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git add file3.txt && git commit -m "Add File 3"', { shell: true, stdio: 'inherit' });

spawn('echo "badfile" > exercise/badfile.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git add badfile.txt && git commit -m "Add File 4"', { shell: true, stdio: 'inherit' });

spawn('echo "file4" > exercise/file4.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git add file4.txt && git commit -m "Add File 4"', { shell: true, stdio: 'inherit' });

spawn('echo "file5" > exercise/file5.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git add file5.txt && git commit -m "Add File 5"', { shell: true, stdio: 'inherit' });