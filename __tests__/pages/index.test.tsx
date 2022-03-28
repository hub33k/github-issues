import { render, screen } from '@testing-library/react';
import HomePage from '~/pages/index';

describe(HomePage.name, () => {
  it('renders a heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', {
      name: /Github Issues/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
