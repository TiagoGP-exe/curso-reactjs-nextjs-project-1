import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'testando'} />);
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="um valor qualquer" />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });
  it('should match sanpshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue="um valor qualquer" />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <input
          class="text-input"
          placeholder="Type your search"
          type="search"
          value="um valor qualquer"
        />
      </div>
    `);
  });
});
