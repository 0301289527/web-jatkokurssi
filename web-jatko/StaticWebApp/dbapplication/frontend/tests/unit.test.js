import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders User Management System heading', () => {
    render(<App />);
    const heading = screen.getByText(/User Management System/i);
    expect(heading).toBeInTheDocument();
});
