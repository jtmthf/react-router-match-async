import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import MatchAsync from '../index';

function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

async function load() {
  await sleep(200);
  return <p>Hello Async Route!</p>
}

it('loads components asynchronously', async () => {
  const component = renderer.create(
    <MemoryRouter>
      <MatchAsync exactly pattern="/" getComponent={load} />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  await sleep(300);
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
