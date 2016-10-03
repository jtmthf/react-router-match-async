# react-router-match-async
[![Build Status](https://travis-ci.org/jtmthf/react-router-match-async.svg?branch=master)](https://travis-ci.org/jtmthf/react-router-match-async)
[![Coverage Status](https://coveralls.io/repos/github/jtmthf/react-router-match-async/badge.svg)](https://coveralls.io/github/jtmthf/react-router-match-async)

A replacement for the Match component in React Router v4 that allows for async routes

Note that this project is pre-release and API's will likely change. A stable version will not be
released until React Router v4 is stable.

## Installation

  `npm install react-router-match-async`

## Usage
Very basic example that shows loading a component using webpack 2.

```javascript
import { BrowserRouter } from 'react-router';
import MatchAsync from 'react-router-match-async';

async function load() {
  return await System.import('./asyncComponent');
}

<BrowserRouter>
  <MatchAsync exactly pattern="/" getComponent={load} />
</BrowserRouter>

```

## Limitations

This library doesn't currently work with server side rendering. Using a centralized route config
is likely the only option as the routes need to be fully parsed in order to know what to dynamically
load. Another limitation is that it's currently not possible to block before the needed data is
loaded. For now, a null element is rendered while waiting, which isn't the best user experience. I'd
happily accept ideas on how to fix this.


## Tests

  `npm test`

## Contributing

PR's welcome as long as they do not decrease the code-coverage percentage.
