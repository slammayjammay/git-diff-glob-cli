const execSync = require('child_process').execSync
const chalk = require('chalk')

const outputFile = 'help.txt'
let text = `\
${chalk.bold('DESCRIPTION')}
  Print diffs for individual or multiple files. Provide substrings
  of files you want the diff of. All files matching the given
  substrings will be diff-ed and printed to the screen, by default
  case-insensitively.

${chalk.bold('USAGE')}
  git-diff-glob [options] [path...]

${chalk.bold('OPTIONS')}
  -c, --case-sensitive    Match substring case-sensitively.
  -h, --help              Display this help screen.
  -p, --pager             Log output into a pager.

${chalk.bold('EXAMPLES')}
  git-diff-glob html
  git-diff-glob --pager json
`

execSync(`echo "${text}" > ${outputFile}`)
