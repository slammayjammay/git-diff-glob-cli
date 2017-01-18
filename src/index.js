const join = require('path').join
const execSync = require('child_process').execSync
const spawnSync = require('child_process').spawnSync
const chalk = require('chalk')
const gitDiffGlob = require('git-diff-glob')
const pager = require('node-pager')

class GitDiffGlobCli {
	constructor(options, args) {
		if (options.help) {
			this.showHelpScreen()
			return
		}

		let diff = gitDiffGlob(args, { caseInsensitive: options.caseInsensitive })

		if (options.pager) {
			pager(diff)
		} else {
			console.log(diff)
		}
	}

	showHelpScreen() {
		let helpfile = './help.txt'
		let help = execSync(`cat ${helpfile}`).toString('utf8')
		console.log(help)
	}
}

module.exports = GitDiffGlobCli
