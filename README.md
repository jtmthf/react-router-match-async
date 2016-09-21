# react-router-match-async
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


## Tests

  `npm test`

## Contributing

PR's welcome as long as they do not decrease the code-coverage percentage.
