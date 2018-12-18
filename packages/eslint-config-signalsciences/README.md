# Eslint Config SignalSciences

Shared eslint config for Signal Sciences projects.


## What problem are we solving?

Managing configs across projects can be tedious... sharing is caring.


## What does this do?

This project acts as a central location to manage eslint configs across Signal
Sciences projects. At the moment, this includes the following:

### Plugins, Presets, and Parsers, Oh my!

- [babel-eslint](https://www.github.com/babel/babel-eslint) 
- [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)


## What doesn't this do?

**Caveat emptor:** This config will change without warning. Intended for use
with Signal Sciences projects _only_.

Good news though! There's almost nothing going on here. Probably best to just
make it your own. :)

Working on a SigSci project? Continue below:


## Getting started

```
yarn add -D eslint-config-signalsciences
```

## Usage

### Via `.eslintrc`

```json
{
  "extends": "signalsciences"
}
```

### Via `package.json`

```json
{
  "eslintConfig": {
    "extends": "signalsciences"
  }
}
```

## References and related projects

- [eslint](https://eslint.org)
