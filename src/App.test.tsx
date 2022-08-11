import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Exemples/Counter/Counter';

test('renders learn react link', () => {
  render(<Counter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
