'use strict';
/* eslint-disable no-console */
const spawn = require('child_process').spawnSync;
const kata="break-up-a-feature"

spawn('rm -rf exercise/', { shell: true, stdio: 'inherit' });
console.log(`Setting up exercise \'${kata}\'...`);
spawn('git init exercise', { shell: true, stdio: 'inherit' });

// Here's the history of the master branch, including the typo 'coode'.
spawn(`cd exercise && echo "Main app, line one" > myapp.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "Main app, line two" >> myapp.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "Main app, line three" >> myapp.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "--`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add myapp.txt && git commit -am "Add myapp.txt"`, { shell: true, stdio: 'inherit' });

// Switch to branch feature1 and add part one
spawn(`cd exercise && git checkout -b feature1"`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && echo "Feature 1, part one" >> myapp.txt && git add myapp.txt && git commit -am "Add Feature1, part one of five"`, { shell: true, stdio: 'inherit' });

// You know what? Maybe let's add some linting.
spawn(`cd exercise && echo "Here are some linting rules" > lint.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add lint.txt && git commit -am "Might as well add some linting"`, { shell: true, stdio: 'inherit' });

// Add part two of Feature1
spawn(`cd exercise && echo "Feature1, part two" >> myapp.txt && git add myapp.txt && git commit -am "Add Feature1, part two of five"`, { shell: true, stdio: 'inherit' });

// Add part three of Feature1
spawn(`cd exercise && echo "Feature1, part three" >> myapp.txt && git add myapp.txt && git commit -am "Add Feature1, part three of five"`, { shell: true, stdio: 'inherit' });

// As long as we have linting, let's make it better..
spawn(`cd exercise && echo "Here are some additional linting rules" >> lint.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git commit -am "Might as well add even more linting."`, { shell: true, stdio: 'inherit' });

// Add part four of Feature1
spawn(`cd exercise && echo "Feature1, part four" >> myapp.txt && git add myapp.txt && git commit -am "Add Feature1, part four of five"`, { shell: true, stdio: 'inherit' });

// Heck, let's add some unit tests.
spawn(`cd exercise && echo "Here's a unit test" > test.txt`, { shell: true, stdio: 'inherit' });
spawn(`cd exercise && git add test.txt && git commit -am "Might as well add a unit test while we're in here."`, { shell: true, stdio: 'inherit' });

// Add part five of Feature1
spawn(`cd exercise && echo "Feature1, part five" >> myapp.txt && git add myapp.txt && git commit -am "Add Feature1, part five of five"`, { shell: true, stdio: 'inherit' });

console.log(`--`);
console.log(`Setup of exercise ${kata} complete!`);