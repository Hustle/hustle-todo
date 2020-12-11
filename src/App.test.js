import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const todo = screen.getByText(/Render todo list/i);
  expect(todo).toBeInTheDocument();
});
