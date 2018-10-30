# Git Kata: Detached Head

## Setup:

In your terminal, run `$ node setup.js`

When you see "setup complete", run `$ cd exercise`

## The task

While browsing a branch, you suddenly notice the message:
```
You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>
```

This is a [scary situation](https://www.youtube.com/watch?v=EKM4zgXbYY8). Do not fret!

"Detached Head" state simply means that `HEAD` is pointing to an individual commit, instead of to a branch. That's all!

After running the setup script, the repository in `exercise` has been placed in a "Detached Head" state.

1. Run `git status`. What does the output say?
1. Restore normalcy by checking out branch `master`.
1. Use `git log` to see the five commits in this repository's history.  Jot down the first five characters of each commit's SHA1 hash.
1. Check out an individual commit by running `git checkout` and its SHA1 hash. Notice how the "detached head" message returns.
1. Return to the `HEAD` of the master branch.
1. Let's look at how master's `HEAD` points to the latest commit of a set of commits. In a text editor, open up `exercise/.git/refs/heads/` and open the file `master`.  What does it contain?
1. Check out an individual commit again. Now what does HEAD contain?

## Useful Commands
* `git checkout master`
* `git log --oneline`
* `git checkout <$SHA1>`

## Further Reading
* "[What's a Detached Head in Git?](https://www.git-tower.com/learn/git/faq/detached-head-when-checkout-commit)"