# ng authed client
[![Build Status](https://travis-ci.org/beaulac/ng-authed-client.svg?branch=master)](https://travis-ci.org/beaulac/ng-authed-client)
[![codecov](https://codecov.io/gh/beaulac/ng-authed-client/branch/master/graph/badge.svg)](https://codecov.io/gh/beaulac/ng-authed-client)
[![npm version](https://badge.fury.io/js/ng-authed-client.svg)](http://badge.fury.io/js/ng-authed-client)
[![devDependency Status](https://david-dm.org/beaulac/ng-authed-client/dev-status.svg)](https://david-dm.org/beaulac/ng-authed-client?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/beaulac/ng-authed-client.svg)](https://github.com/beaulac/ng-authed-client/issues)
[![GitHub stars](https://img.shields.io/github/stars/beaulac/ng-authed-client.svg)](https://github.com/beaulac/ng-authed-client/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/beaulac/ng-authed-client/master/LICENSE)

## Demo
https://beaulac.github.io/ng-authed-client/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save ng-authed-client
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { AuthedClientModule } from 'ng-authed-client';

@NgModule({
  imports: [
    AuthedClientModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/beaulac/ng-authed-client/blob/master/demo/demo.component.ts).

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://beaulac.github.io/ng-authed-client/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and [yarn](https://yarnpkg.com/en/docs/install)
* Install local dev dependencies: `yarn` while current directory is this repo

### Development server
Run `yarn start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `yarn test` to run tests once or `yarn run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
yarn run release
```

## License

MIT
