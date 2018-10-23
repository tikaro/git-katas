# Git Kata: Squash Commits

In this kata I did not worked as I should have, but I would like to clean up my history a bit.

The six newest commits all tinker with `secondfile.txt` which contains my feature.

While developing, I got a bit hot under the color and used the curse word [BELGIUM](https://hitchhikers.fandom.com/wiki/Belgium).

I would like these commits to be squashed into a single commit.  While  you are at it, remove the curse word BELGIUM.


## Task
1. _Squash_ the six commits to `secondfile.txt` into one commit, cleaning up the commit msg of one of the commits
1. How does `git log` look now?

### Relevant commands
- `git rebase -i <ref>`
- `git rev-parse <ref>`
