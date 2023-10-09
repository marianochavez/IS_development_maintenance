import { fireEvent, render, screen } from '@testing-library/react';

import App from '@/App';

test('count is 0 at first', () => {
  render(<App />);

  expect(screen.getByText('Count is: 0')).toBeDefined();
});

test('increments count', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button'));

  expect(screen.getByText('Count is: 1')).toBeDefined();
});

test('renders hello world', () => {
  render(<App />);

  expect(screen.getByText('Hello World!')).toBeDefined();
});

test('renders logo', () => {
  render(<App />);

  expect(screen.getByAltText('logo')).toBeDefined();
});
