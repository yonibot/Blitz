# Blitz
[![NPM](https://nodei.co/npm/blitz-project-cli.png?downloads=true)](https://nodei.co/npm/blitz-project-cli/)

<!-- MarkdownTOC -->

- Installation
- Getting started
- API
- Release notes

<!-- /MarkdownTOC -->
 
Blitz keeps named lists of npm "presets" for different types of projects. 

So, for instance, if you always install MobX, AntDesign, and certain Babel presets for your React projects, you can create a Blitz file called "React" and include those packages. Running `blitz run React` will install all packages, dev packages, and shell commands that you defined in the Blitzfile.

<a name="None"></a>
## Installation
```
npm install blitz-project-cli
```

<a name="None"></a>
## Getting started
Create a new Blitz file for a particular project type and then open it in your editor. 

```
$ blitz new react-native
New config created: config_files/react-native.json

$ blitz list
react-native

$ blitz edit react-native
{ opens your text editor with a skeleton JSON }
```

Now we'll add our default packages.
```
{
	"packages":[
		"react-native-vector-icons",
		"mobx",
		"mobx-react",
		"babel-plugin-transform-decorators-legacy"
	],
	"devPackages":[],
	"shellCommands":["echo Done!"]
}
```

Run the blitz:
```
$ blitz run react-native
```

<a name="None"></a>
## API
Run `blitz help` to see all available commands.
```
  Commands:

    new [name]   
    list         
    edit <name>  
    run <name>   
    delete <name>
```

<a name="None"></a>
## Release notes
As of 0.0.12-beta.7, config files are stored on the user's machine, where aplication config data is stored.
