#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

function newConfig(name) {
	const filename = `config_files/${name || "config_"+Date.now().toString()}.json`
	const json = JSON.stringify(require('./skeleton'));
	fs.writeFile(filename, json, (err) => {
	  if (err) throw err;
	  console.log(`New config created: ${filename}`);
	});
}

function listConfigs() {
	fs.readdir('./config_files', function(err, files) {
		for (let i = 0; i < files.length; i++) {
			console.log(`${i} -> ${files[i]}`);
		}
	});
}

function editConfig(num) {
  exec(`open ${filepath(num)}`)
}

function runConfig(num) {
	json = 
}

function filepath(index) {
	const fileNames = fs.readdirSync('./config_files');
	fileName = fileNames[index];
	return path.resolve(`./config_files/${fileName}`);
}


program
	.version('0.0.1')
	.command('new [name]')
	.action(newConfig)

program
	.command('list')
	.action(listConfigs)

program
	.command('edit <num>')
	.action(editConfig)

program
	.command('run <num>')
	.action(runConfig)

program.parse(process.argv);


	// [] = optional input
	// <> = required input
