import { render, screen } from '@testing-library/react';
import Login from '../Login';

test('checking component loaded', () => {
  //steps for testing heading element loaded
  render(<Login />);
  expect(screen.queryByText(/Login/)).toBeInTheDocument();
})

test('checking email & passwords inputs are empty', ()=>{
  render(<Login/>);
  expect(screen.queryAllByPlaceholderText('Email')).toHaveValue()
  expect(screen.queryAllByPlaceholderText('Password')).toHaveValue()

})