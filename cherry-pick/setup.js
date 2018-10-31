'use strict';
/* eslint-disable no-console */
const spawn = require('child_process').spawnSync;
const kata="cherry-pick"

spawn('rm -rf exercise/', { shell: true, stdio: 'inherit' });
console.log(`Setting up exercise \'${kata}\'...`);
spawn('git init exercise', { shell: true, stdio: 'inherit' });

// Here's the history of the master branch, including the typo 'coode'.
spawn(`cd exercise && echo "First line of coode" > myapp.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "Second line of code" >> myapp.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "Third line of code" >> myapp.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add myapp.txt && git commit -am "Add myapp.txt"`, { shell: true, stdio: 'inherit' });

// Switch to branch new-feature and start working
spawn(`cd exercise && git checkout -b new-feature"`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "First part of a fantastic new feature" >> myapp.txt && git add myapp.txt && git commit -am "Add the first part of a new feature."`, { shell: true, stdio: 'inherit' });

//Uh-oh! Time to fix that typo on the master branch
spawn(`cd exercise && git checkout master"`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "First line of code" > myapp.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "Second line of code" >> myapp.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "Third line of code" >> myapp.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add myapp.txt && git commit -am "Amend 'coode' to 'code' to fix a bug"`, { shell: true, stdio: 'inherit' });

// Mistakenly keep working on the master branch
spawn(`cd exercise && echo "Second part of a new feature" >> myapp.txt && git add myapp.txt && git commit -am "Add the second part of the new feature."`, { shell: true, stdio: 'inherit' });

console.log(`--`);
console.log(`Setup of exercise ${kata} complete!`);