import { render, screen, within } from '@testing-library/react';
import { text } from 'stream/consumers';
import Footer from './Footer';

it('renders FaIcons 5 shows up', () => {
    render(<Footer/>);
    const faElement = screen.getAllByTestId('fa');
    expect(faElement).toHaveLength(5);
});

it('renders 2brackets.com shows up', () => {
    render(<Footer/>);
    const iconTextElement = screen.getByText('2brackets.com');
    expect(iconTextElement).toBeInTheDocument();;
});

it('renders All rights shows up', () => {
    render(<Footer/>);
    const textElement = screen.getByText('© 2brackets.com 2022. All rights reserved');
    expect(textElement).toBeInTheDocument();;
});

it('renders textlink to Github', () => {
    render(<Footer/>);
    expect(screen.getByText('Github')).toHaveAttribute('href', 'https://github.com/2brackets')
});




