# `git-diff-glob-cli`
> An easy way to diff files in the terminal.

# Install
```sh
$ npm install -g git-diff-glob-cli
$ gd --help
```

# Usage
Provide a list of substrings for files you want the diff of. `git-diff-glob-cli` will get the diff of all files that match the substring and print them to the screen, by default using a pager.
```sh
$ gd pack # grab diff of all files that match 'pack', e.g. `package.json`
$ gd --no-pager html # e.g. all '.html' files
```
