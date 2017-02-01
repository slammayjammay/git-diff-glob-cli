const join = require('path').join
const execSync = require('child_process').execSync
const spawnSync = require('child_process').spawnSync
const chalk = require('chalk')
const gitDiffGlob = require('git-diff-glob')
const pager = require('node-pager')

class GitDiffGlobCli {
	/**
	 * @param {array} args - The list of substrings to match.
	 * @param {object} options - See help file.
	 */
	constructor(args, options) {
		if (options.help) {
			this.showHelpScreen()
			return
		}

		let diff = gitDiffGlob(args, {
			caseSensitive: options.caseSensitive
		})

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
