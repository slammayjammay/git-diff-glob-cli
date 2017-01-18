#!/usr/bin/env node

require('babel-polyfill')
const join = require('path').join
const spawnSync = require('child_process').spawnSync
const GitDiffGlobCli = require(join(__dirname, '../'))

let args = process.argv.slice(2)
let options = {
	pager: true,
	caseInsensitive: true
}

if (args.includes('-h') || args.includes('--help')) {
	options.help = true
}
if (args.includes('-n') || args.includes('--no-pager')) {
  options.pager = false
}
if (args.includes('-c') || args.includes('--case-sensitive')) {
	options.caseInsensitive = false
}

new GitDiffGlobCli(options, args)
