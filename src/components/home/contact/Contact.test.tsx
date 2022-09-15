import { cleanup, render, screen } from '@testing-library/react';
import Contact from './Contact';

const NAME: string = 'Andy Johnsson'
const EMAIL: string = 'test@test.com'
const MESSAGE: string = 'Hi, how are you?'

const ANSWER_NO_NAME: string = 'Oops! you forgot to fill in your name'
const ANSWER_NO_EMAIL: string = 'Oops! you forgot to fill in your email'
const ANSWER_NO_MESSAGE: string = 'Oops! you forgot to fill in your message'

afterEach(cleanup)

it('renders info mail text', () => {
  render(<Contact/>);
  const contactElement = screen.getByText(/contact/i);
  expect(contactElement).toBeInTheDocument();
});

it('renders status Message with no name input', () => {
  render(<Contact/>);
  const inputName = screen.getByTestId<HTMLInputElement>('input-name');
  const inputEmail = screen.getByTestId<HTMLInputElement>('input-email');
  const inputMessage = screen.getByTestId<HTMLTextAreaElement>('input-message');
  const button = screen.getByRole('button')
  inputName.value = ''
  inputEmail.value = EMAIL
  inputMessage.value = MESSAGE

  button.click()

  const statusMessage = screen.getByText(ANSWER_NO_NAME);
  expect(statusMessage).toBeInTheDocument();
});

it('renders status Message with no email input', () => {
  render(<Contact/>);
  const inputName = screen.getByTestId<HTMLInputElement>('input-name');
  const inputEmail = screen.getByTestId<HTMLInputElement>('input-email');
  const inputMessage = screen.getByTestId<HTMLTextAreaElement>('input-message');
  const button = screen.getByRole('button')
  inputName.value = NAME
  inputEmail.value = ''
  inputMessage.value = MESSAGE

  button.click()

  const statusMessage = screen.getByText(ANSWER_NO_EMAIL);
  expect(statusMessage).toBeInTheDocument();
});

it('renders status Message with no messages input', () => {
  render(<Contact/>);
  const inputName = screen.getByTestId<HTMLInputElement>('input-name');
  const inputEmail = screen.getByTestId<HTMLInputElement>('input-email');
  const inputMessage = screen.getByTestId<HTMLTextAreaElement>('input-message');
  const button = screen.getByRole('button')
  inputName.value = NAME
  inputEmail.value = EMAIL
  inputMessage.value = ''

  button.click()

  const statusMessage = screen.getByText(ANSWER_NO_MESSAGE);
  expect(statusMessage).toBeInTheDocument();
});

it('renders status Message with no input', () => {
  render(<Contact/>);
  const inputName = screen.getByTestId<HTMLInputElement>('input-name');
  const inputEmail = screen.getByTestId<HTMLInputElement>('input-email');
  const inputMessage = screen.getByTestId<HTMLTextAreaElement>('input-message');
  const button = screen.getByRole('button')
  inputName.value = ''
  inputEmail.value = ''
  inputMessage.value = ''

  button.click()

  const statusMessage = screen.getByText(ANSWER_NO_NAME);
  expect(statusMessage).toBeInTheDocument();
});

it('renders status Message with invalid email as input', () => {
  render(<Contact/>);
  const inputName = screen.getByTestId<HTMLInputElement>('input-name');
  const inputEmail = screen.getByTestId<HTMLInputElement>('input-email');
  const inputMessage = screen.getByTestId<HTMLTextAreaElement>('input-message');
  const button = screen.getByRole('button')
  inputName.value = NAME
  inputEmail.value = 'test@testcom'
  inputMessage.value = MESSAGE

  button.click()

  const statusMessage = screen.getByText('Oops! Your email address is incorrect: test@testcom');
  expect(statusMessage).toBeInTheDocument();
});



//Oops! Your email address is incorrect: