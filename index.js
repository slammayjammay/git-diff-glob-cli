const join = require('path').join
const execSync = require('child_process').execSync
const spawnSync = require('child_process').spawnSync
const chalk = require('chalk')
const gitDiffGlob = require('git-diff-glob')

class GitDiffGlobCli {
	constructor(options, args) {
		if (options.help) {
			this.showHelpScreen()
			return
		}

		let diff = gitDiffGlob(args)

		if (options.pager) {
			this.outputToPager(diff)
		} else {
			this.output(diff)
		}
	}

	output(diff) {
		console.log(diff)
	}

	outputToPager(diff) {
		let pager = join(__dirname, './helpers/pager')
		spawnSync(`${pager}`, [diff], { stdio: 'inherit' })
	}

	showHelpScreen() {
		let helpfile = './help.txt'
		let help = execSync(`cat ${helpfile}`).toString('utf8')
		console.log(help)
	}
}

module.exports = GitDiffGlobCli
