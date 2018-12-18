# Jest Preset

Shared preset for Signal Sciences projects.


## What problem are we solving?

Managing configs across projects can be tedious... sharing is caring.


## What does this do?

This package acts as a central location to manage the rollup config across Signal
Sciences projects. At the moment, this includes the following plugins:

- [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest)
- [jest-enzyme](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme)
- [jest-environment-enzyme](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-environment-enzyme)
- [enzyme-to-json](https://github.com/adriantoine/enzyme-to-json)
- [enzyme-adapter-react-16](https://www.npmjs.com/package/enzyme-adapter-react-16)


## What doesn't this do?

**Caveat emptor:** This preset will change without warning. Intended for use
with Signal Sciences projects _only_.

Good news though! There's almost nothing going on here. Probably best to just
make it your own. :)

Working on a SigSci project? Continue below:


## Getting started

```
yarn add -D jest-preset-signalsciences
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

- [Jest](https://jestjs.io)
- [Enzyme](https://airbnb.io/enzyme/)
