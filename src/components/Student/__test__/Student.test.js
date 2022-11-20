import { fireEvent, render, screen } from '@testing-library/react';
import Student from '../Student';

const mockRemove = jest.fn()

const mockeditStudent = jest.fn() 

test('should render all element in student element', () => {
  render(<Student student={{}} remove={mockRemove} editStudent={mockeditStudent} />);
  const studentIdElement = screen.getByText(/ID/i);
  const studentNameElement = screen.getByText(/Name/i);
  const studentEmailElement = screen.getByText(/Email/i);
  const studentAgelement = screen.getByText(/Age/i);
  const editStudentButton = screen.getByText(/Edit/i);
  const removeButton = screen.getByText(/Delete/i);

  expect(studentIdElement).toBeInTheDocument();
  expect(studentNameElement).toBeInTheDocument();
  expect(studentEmailElement).toBeInTheDocument();
  expect(studentAgelement).toBeInTheDocument();
  expect(editStudentButton).toBeInTheDocument();
  expect(removeButton).toBeInTheDocument();
});

test('should able to click editStudent Button', () => {
    render(<Student student={{}} remove={mockRemove} editStudent={mockeditStudent} />);
    const editStudentButton = screen.getByText(/Edit/i);
    
    fireEvent.click(editStudentButton)
    expect(mockeditStudent).toBeCalled()
});

test('should able to click remove Button', () => {
    render(<Student student={{}} remove={mockRemove} editStudent={mockeditStudent} />);
    const removeButton = screen.getByText(/Delete/i);
    
    fireEvent.click(removeButton)
    expect(mockRemove).toBeCalled()
});