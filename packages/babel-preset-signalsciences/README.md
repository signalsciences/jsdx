# Babel Preset SignalSciences

Shared preset for Signal Sciences projects.


## What problem are we solving?

Managing configs across projects can be tedious... sharing is caring.


## What does this do?

This project acts as a central location to manage babel configs across Signal
Sciences projects. At the moment, this includes the following presets and
plugins:

### Presets

- [@babel/preset-env](https://babeljs.io/docs/en/next/babel-preset-env.html) 
- [@babel/preset-react](https://babeljs.io/docs/en/next/babel-preset-react.html) 
- [@babel/preset-flow](https://babeljs.io/docs/en/next/babel-preset-flow.html) 

### Plugins

- [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties)
- [@babel/plugin-proposal-object-rest-spread](https://babeljs.io/docs/en/next/babel-plugin-proposal-object-rest-spread)


## What doesn't this do?

**Caveat emptor:** This preset will change without warning. Intended for use
with Signal Sciences projects _only_.

Good news though! There's almost nothing going on here. Probably best to just
make it your own. :)

Working on a SigSci project? Continue below:


## Getting started

```
yarn add -D babel-preset-signalsciences
```

## Usage

### Via `.babelrc`

```json
{
 "presets": ["babel-preset-signalsciences"]
}
```

### Via `package.json`

```json
{
  "babel": {
    "presets": ["babel-preset-signalsciences"]
  }
}
```

## References and related projects

- [Babel](https://babeljs.io)
