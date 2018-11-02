# Git kata: Break Up A Feature

## Setup:

In your terminal, run `$ node setup.js`

When you see "setup complete", `cd` to the `exercise` folder.

## The Story

_Thanks Luke Pettway for contributing this real-world example!_

You are contributing to an open source project.

You selected an issue from the project's Github: "We should have Feature1" and assigned the issue to yourself. 

You created branch `feature1` from the mainline `master` branch, and you wrote code for the new feature. Fantastic!

While were you were in there, you made several useful but unrelated "might as well" changes that aren't specifically linked to the new feature.

In the process of submitting your pull request to the project, you realized that the "might as well" changes, though useful, don't really belong in the PR. They should be submitted to the open-source project separately.

## The task

1. Identify the "might as well" changes in the history of branch `feature1`.
1. Move the "Might as well" commits out of branch `feature1` and into a separate branch.
1. When you are done, you will have branch `master` with no changes, branch `feature1` with _only_ changes relevant to the new feature, and a new branch with _only_ the "might as well" changes.

To make things simple in this exercise, each commit is relevant _either_ to the new feature _or_ it is a "might as well" commit.

## Useful Commands

Depending on how you like to work, you might find one or more of these useful

* `git cherry-pick` to copy a commit from one branch to another.
* `git rebase -i` to edit commits.
* `git log --oneline` to see a list of commits in a short, readable view.

## Further Reading

* [git-cherry-pick documentation](https://git-scm.com/docs/git-cherry-pick)
* [git-rebase documentation](https://git-scm.com/docs/git-rebase)
* [Splitting a Big Commit into More Manageable Chunks](https://www.bigeng.io/git-magic/) FOR BRAVE READERS ONLY. This blog is well-written and well-documented, but YEESH!