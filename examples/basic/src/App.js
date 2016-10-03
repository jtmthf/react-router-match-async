import React from 'react';

// 1. import a few components
import { BrowserRouter, Miss, Link } from 'react-router';

// import MatchAsync
import MatchAsync from '../../../dist';


const NoMatch = ({ location }) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
);

const App = () => (
  // 2. render a `Router`, it will listen to the url changes
  //    and make the location available to other components
  //    automatically
  <BrowserRouter>
    <div>
      <ul>
        {/* 3. Link to some paths with `Link` */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />

      {/* 4. Render some `<Match/>` components.
             When the current location matches the `pattern`
             then the `component` will render.
      */}
      <MatchAsync exactly pattern="/" getComponent={(cb) => {
        require.ensure([], (require) => {
          cb(null, require('./Home').default);
        });
      }} />
      <MatchAsync pattern="/about" getComponent={(cb) => {
        require.ensure([], (require) => {
          cb(null, require('./About').default);
        });
      }} />
      <MatchAsync pattern="/topics" getComponent={(cb) => {
        require.ensure([], (require) => {
          cb(null, require('./Topics').default);
        });
      }} />

      {/* If none of those match, then a sibling `Miss` will render. */}
      <Miss component={NoMatch} />
    </div>
  </BrowserRouter>
);

export default App;
