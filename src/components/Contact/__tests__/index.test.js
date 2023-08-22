import React from 'react';
import { render, cleanup,  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);



describe('Contact form ', () => {
    it('renders', () => {
        render(<ContactForm />);
    }
    )

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
      });

      it('displays text', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
      });

      it('displays text', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('button')).toHaveTextContent('Submit')
      })
})