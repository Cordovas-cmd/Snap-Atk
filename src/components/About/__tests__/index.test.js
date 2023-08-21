import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../About';



/* This will ensure that after each test, we won't have any leftover memory data that could give us false results.*/
afterEach(cleanup);

// declare the component we're testing / renders About test
describe('About component', () => {

      // First Test

    //   the string declares what is being tested. In the second argument, a callback function runs the test.
      it('renders', () => {
        render(<About />);
      });
  // Second Test
// compare snapshot versions of the DOM node structure. A snapshot is a serialized version of the DOM node structure, enabled by Jest.
  it('matches snapshot DOM node structure', () => {

    // render About
// use the asFragment function, which returns a snapshot of the About component.
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
  })