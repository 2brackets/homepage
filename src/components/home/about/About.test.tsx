import { render, screen } from '@testing-library/react';
import { text } from 'stream/consumers';
import About from './About'

const ABOUT: string = 'About'

it('renders text About shows up', () => {
    render(<About/>);
    const contactElement = screen.getByText(ABOUT);
    expect(contactElement).toBeInTheDocument();
});

it('renders that it is one button', () => {
    render(<About/>);
    const textList: HTMLButtonElement[] = screen.getAllByTestId("about-text")
    expect(textList).toHaveLength(3)
});

