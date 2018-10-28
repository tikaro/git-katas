# Git kata: Amending commits
When you are working, you make a lot of commits.
Sometimes you just forget something obvious that you want to fix.

`git commit --amend` allows you to do just that. It allows you to tinker with the last commit you made.

In this kata, you are working on Feature 73. You made two files -- `foo.txt` and `bar.txt`. You committed foo.txt, but you forgot to commit bar.txt.  The change hasn't been pushed yet, so let's fix that commit by adding `bar.txt` to the commit you just made.

## The task
1. Run the command `node setup.js`
1. What does `git status` tell you?
1. What does `git log` tell you?
1. Stage the addition of bar.txt
1. Run `git commit --amend`
1. What happened? What does `git log` tell you?
1. What happens if you run `git commit --amend` again?
