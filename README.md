# `git-diff-glob-cli`
> An easy way to diff files in the terminal.

# Install
```sh
$ npm install -g git-diff-glob-cli
$ git-diff-glob --help
```

I also put this line in my `.bash_profile`
```sh
alias gd="git-diff-glob --pager"
```

# Usage
Provide a list of substrings for files you want the diff of. `git-diff-glob-cli` will get the diff of all files that match the substring (case-insensitively by default) and print them to the screen.
```sh
# grab diff of all files that match 'READ', e.g. `README.md`
$ git-diff-glob READ --case-sensitive
# grab diff of all '.html' files and output into a pager
$ git-diff-glob --pager html
```
