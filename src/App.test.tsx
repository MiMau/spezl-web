import App from './App';
// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

describe('<App />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      div
    );
  });
});
