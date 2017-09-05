#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');

function newConfig(name) {
	if (name) {

	} else {
		// create_config_skeleton
		// print explanations
		const date = new Date().toString();
		const json = JSON.stringify(require('./skeleton'));
		fs.writeFile(`config_files/config_${date}.json`, json, (err) => {
		  if (err) throw err;
		  console.log('A new default !');
		});
	}
}

function listConfigs() {
	console.log("LISTING CONFIGS");
	// Assign number to each file
	console.log('');
	fs.readdir('./config_files', function(err, files) {
		for (let i = 0; i < files.length; i++) {
			console.log(`${i} -> ${files[i]}`);
		}
		console.log('');
		console.log('Run `preset run NUM` to run a specific preset file.')
		console.log('Run `preset edit NUM` to edit a specific preset file.')
		console.log('');
	});
}

function editConfig(num) {
	
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

program.parse(process.argv);


	// [] = optional input
	// <> = required input
