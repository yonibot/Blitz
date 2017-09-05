# Blitz

Get up and running fast in any project by installing default npm packages in a blitz.

## Installation
```
npm install blitz-js-cli
```

## Getting started
First create a new Blitz file for a particular project type and open it in your editor. Let's say we always install MobX and an icon library for our React Native projects:

```
$ blitz new react-native
New config created: config_files/react-native.json

$ blitz list
0 -> react-native.json

$ blitz edit 0
{ opens your text editor with a skeleton JSON }
```

Now we'll add our default packages. This file can be updated at any point by running `blitz edit <num>`.
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
$ blitz run 0
```

