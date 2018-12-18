# Rollup Config

Shared config for Signal Sciences projects.


## What problem are we solving?

Managing configs across projects can be tedious... sharing is caring.


## What does this do?

This package acts as a central location to manage the rollup config across Signal
Sciences projects. At the moment, this includes the following plugins:

- [rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel)
- [rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve)
- [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss)
- [rollup-plugin-flow-entry](https://github.com/swansontec/rollup-plugin-flow-entry)


## What doesn't this do?

**Caveat emptor:** This preset will change without warning. Intended for use
with Signal Sciences projects _only_.

Good news though! There's almost nothing going on here. Probably best to just
make it your own. :)

Working on a SigSci project? Continue below:


## Getting started

```
yarn add -D rollup-config-signalsciences
```

## Usage

### Via `rollup.config.js`

```js
module.exports = require('rollup-config-signalsciences')
```

## References and related projects

- [Rollup](https://rollupjs.org)
