# Eslint Config SignalSciences

Shared config for Signal Sciences projects.

## What problem are we solving?

Managing configs across projects can be tedious... sharing is caring.

## What does this do?

Provides a base config.

## What doesn't this do?

**Caveat emptor:** This config will change without warning. Intended for use
with Signal Sciences projects _only_.

Good news though! There's almost nothing going on here. Probably best to just
make it your own. :)

Working on a SigSci project? Continue below:

## Getting started

```
yarn add -D eslint eslint-config-signalsciences
```

## Usage

### Via `package.json`

```json
{
  "eslintConfig": {
    "extends": "signalsciences"
  }
}
```

## References and related projects

- [eslint](https://github.com/eslint/eslint)
