# Git Kata: Squash Commits

## Setup:

In your terminal, run
```
$ node setup.js
```
When you see "setup complete", run
```
$ cd exercise
```

In this exercise, you will be returning to a flurry of commits you made the night before.

You committed `firstfile.txt`. Next, you made six commits to `secondfile.txt` as you gradually found more and more things that should be added to it.

Your commit messages started off relevant, but slowly became lower-quality as you got frustrated.

In your final commit, you got a bit hot under the color and used the curse word [BELGIUM](https://hitchhikers.fandom.com/wiki/Belgium).

You have not yet pushed these commits to an origin repository, so it's appropriate to tidy up the branch a bit.

Squash all the commits touching `secondfile.txt` into a single commit.

While  you are at it, tidy up the commit messages to more accurately summarize things and remove the curse word BELGIUM.

## Setup



## Task
1. Use `git log`, as well as the options you learned in the `basic-staging` exercise, to understand the commits made so far.
1. _Squash_ the six commits to `secondfile.txt` into one commit, cleaning up the commit msg of one of the commits
1. How does `git log` look now?

### Relevant commands
- `git rebase -i <ref>`
- `git rev-parse <ref>`
