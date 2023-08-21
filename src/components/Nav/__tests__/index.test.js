import React from 'react';
import { render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Nav from '../Nav';

afterEach(cleanup);

describe('Nav component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav />);
    });
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        expect (asFragment()).toMatchSnapshot();
    });
})


// check to see if the emoji, 📸, is visible.
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);
    // Assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
  })

// we'll verify that the text content is being inserted into the <a> tags
  describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render(<Nav />);
      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })