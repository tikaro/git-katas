'use strict';
/* eslint-disable no-console */
const spawn = require('child_process').spawnSync;

spawn('rm -rf exercise/', { shell: true, stdio: 'inherit' });

console.log('Setting up exercise \'basic-branching\'...');
spawn('git init exercise', { shell: true, stdio: 'inherit' });
spawn('echo "dummy" > exercise/dummy.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git add dummy.txt && git commit -m "dummy commit"', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git checkout -b second-branch && git checkout master', { shell: true, stdio: 'inherit' });

console.log('Exercise setup complete!');