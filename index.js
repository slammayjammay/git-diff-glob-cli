const join = require('path').join
const execSync = require('child_process').execSync
const spawnSync = require('child_process').spawnSync
const gitDiffGlob = require('git-diff-glob')

class GitDiffGlobCli {
	constructor(options, args) {
		console.log(options)

		this.options = options
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
}

module.exports = GitDiffGlobCli
