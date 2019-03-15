# Jest Preset

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
yarn add -D jest jest-preset-signalsciences
```


## Usage

### Via `package.json`

```json
{
  "jest": {
    "preset": "jest-preset-signalsciences"
  }
}
```


## References and related projects

- [Jest](https://github.com/facebook/jest)
