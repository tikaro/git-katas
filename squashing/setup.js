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

spawn(`cd exercise && echo This is a relevant fact. > secondfile.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add secondfile.txt && git commit secondfile.txt -m "Add secondfile.txt with a relevant fact\n"`, { shell: true, stdio: 'inherit' });

spawn(`cd exercise && echo This fact is also relevant. >> secondfile.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add secondfile.txt && git commit -m "Add additional relevancy"`, { shell: true, stdio: 'inherit' });

spawn(`cd exercise && echo Now that I think about it, this is important too >> secondfile.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add secondfile.txt && git commit -m "Add even more relevancy"`, { shell: true, stdio: 'inherit' });

spawn(`cd exercise && echo Wait, here's the MOST important fact. >> secondfile.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add secondfile.txt && git commit -m "Yet more relevancy"`, { shell: true, stdio: 'inherit' });

spawn(`cd exercise && echo Hang on, this is the most important fact of all. >> secondfile.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add secondfile.txt && git commit -m "Add the last relevant fact"`, { shell: true, stdio: 'inherit' });

spawn(`cd exercise && echo Here's one more fact >> secondfile.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add secondfile.txt && git commit -m "Darn, I forgot a fact. BELGIUM!"`, { shell: true, stdio: 'inherit' });

console.log(`Setup of exercise ${kata} complete!`);