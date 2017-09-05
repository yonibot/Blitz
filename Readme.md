# Blitz

Get up and running fast in any project by installing default npm packages in a blitz.

## Installation
```
npm install blitz-project-cli
```

## Getting started
Create a new Blitz file for a particular project type and then open it in your editor. 

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

### Be in touch
Let me know if you find this useful! [@yoniweisbrod](https://twitter.com/yoniweisbrod)
