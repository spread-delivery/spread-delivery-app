import { render } from '@testing-library/react';
import App from './App';

test('my first test', () => {
  render(<App />);
  expect(true);
});
