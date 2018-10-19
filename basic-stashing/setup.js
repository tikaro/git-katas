'use strict';
/* eslint-disable no-console */
const spawn = require('child_process').spawnSync;
const kata="basic-stashing"

spawn('rm -rf exercise/', { shell: true, stdio: 'inherit' });
console.log(`Setting up exercise \'${kata}\'...`);
spawn('git init exercise', { shell: true, stdio: 'inherit' });
spawn('cd exercise && mkdir src', { shell: true, stdio: 'inherit' });

// Make two useful files and commit them
spawn('echo "** Some USEFUL INFO ** " > exercise/README.txt', { shell: true, stdio: 'inherit' });
spawn('echo "// awesome C code" > exercise/src/myapp.c', { shell: true, stdio: 'inherit' });
spawn('echo "// awesome C header" > exercise/src/myapp.h', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git add src/myapp.* README.txt', { shell: true, stdio: 'inherit' });
spawn('cd exercise && git commit -m "C code for my app', { shell: true, stdio: 'inherit' });

// Make a useful file, but don't commit it
spawn('echo "// awesome C library" > exercise/src/mylib.c', { shell: true, stdio: 'inherit' });

// Clutter up the exercise folder with a bunch of useless files
spawn('touch exercise/src/myapp.c~ exercise/src/oldfile.c~', { shell: true, stdio: 'inherit' });
spawn('touch exercise/README.txt~', { shell: true, stdio: 'inherit' });
spawn('cd exercise && mkdir obj', { shell: true, stdio: 'inherit' });
spawn('touch exercise/obj/mylib.o exercise/obj/mylib.a exercise/obj/myapp.o exercise/obj/a.out', { shell: true, stdio: 'inherit' });

console.log('Exercise setup complete!');



// TODO: merge the copypasta node setup ABOVE with the desired shell commands BELOW this line.

echo "Initial content of the file" > file.txt
touch fix.txt

git add file.txt fix.txt
git commit -m "Initial commit"


echo "this file haaasss some typos" > bug.txt

git add bug.txt
git commit -m "add bug.txt"

echo "some changes I made and staged" >> file.txt

git add file.txt

echo "some changes I made and did not stage yet" >> file.txt

echo "changes I did not stage" > fix.txt

