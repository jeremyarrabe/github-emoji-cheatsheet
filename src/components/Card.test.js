import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { github } from '../api/data';
import Card from './Card';
describe('Card data Testing', () => {
  for (let i = 0; i < github.types.length; i++) {
    it(`should render the individual symbols correct ${github.types[i].symbol} `, () => {
      render(
        <Card
          title={github.types[i].title}
          symbol={github.types[i].symbol}
          type={github.types[i].type}
        />,
      );
      expect(screen.getByText(github.types[i].title)).toBeInTheDocument();
      expect(screen.getByText(github.types[i].symbol)).toBeInTheDocument();
      expect(screen.getByText(github.types[i].type)).toBeInTheDocument();
    });
  }
});
