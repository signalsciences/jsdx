# PostCSS Preset SignalSciences

Shared preset for Signal Sciences projects.

## What problem are we solving?

Managing configs across projects can be tedious... sharing is caring.

## What does this do?

Provides a base preset.

## What doesn't this do?

**Caveat emptor:** This preset will change without warning. Intended for use
with Signal Sciences projects _only_.

Good news though! There's almost nothing going on here. Probably best to just
make it your own. :)

Working on a SigSci project? Continue below:

## Getting started

```
yarn add -D postcss-cli postcss-preset-signalsciences
```

## Usage

### Via `postcss.config.js`

```js
module.exports = require("postcss-preset-signalsciences")();
```

## References and related projects

- [PostCSS](https://github.com/postcss/postcss)
