# Git kata: Cherry Pick

## Setup:

In your terminal, run `$ node setup.js`

When you see "setup complete", `cd` to the `exercise` folder.

## The Story

You were developing a new feature on the branch `new-feature`. 

You already implemented the first part of a feature. Suddenly, you were notified of a critical bug that had to be fixed right away on the `master` branch.

After the bug fix, you continued to work on the new feature. 

After you committed the second part of the feature, you realized to your horror that you made your commits on the `master` branch instead of the feature branch.

## The task

1. Move the out-of-place commit from the `master` branch to the `new-feature` branch.
1. How would you also bring the bugfix into your feature branch?

## Useful Commands

Here are some useful commands in _no particular order_.  

* `git reset HEAD~1` to move the current branch one step back. This has the consequence of _removing_ the newest commit from a branch
* `git stash` to temporarily save your changes so that you can switch branches
* `git cherry-pick` to add changeset from commit on current branch
* `git log --oneline` to see a list of commits in a short, readable view.

## Further Reading

* [git cherry-pick documentation](https://git-scm.com/docs/git-cherry-pick) on git-scm.com