#!/usr/bin/env node

require('babel-polyfill')
const join = require('path').join
const spawnSync = require('child_process').spawnSync
const minimist = require('minimist')
const GitDiffGlobCli = require(join(__dirname, '../'))

const CLI_OPTIONS = ['help', 'caseSensitive', 'pager']

let argv = minimist(process.argv.slice(2), {
	alias: {
		h: 'help',
		c: 'caseSensitive',
		p: 'pager'
	},
	boolean: CLI_OPTIONS
})

let options = {}
for (let option of CLI_OPTIONS) {
	options[option] = argv[option]
}

new GitDiffGlobCli(argv._, options)
