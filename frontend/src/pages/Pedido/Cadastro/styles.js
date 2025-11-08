import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 600px;
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 0.5rem;

  span {
    color: #e74c3c;
    margin-left: 0.25rem;
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid ${props => props.hasError ? '#e74c3c' : '#ddd'};
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${props => props.hasError ? '#e74c3c' : '#3498db'};
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid ${props => props.hasError ? '#e74c3c' : '#ddd'};
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;

  &:focus {
    border-color: ${props => props.hasError ? '#e74c3c' : '#3498db'};
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  ${props => props.variant === 'primary' && `
    background-color: #3498db;
    color: white;

    &:hover:not(:disabled) {
      background-color: #2980b9;
    }

    &:disabled {
      background-color: #bdc3c7;
      cursor: not-allowed;
    }
  `}

  ${props => props.variant === 'secondary' && `
    background-color: #95a5a6;
    color: white;

    &:hover {
      background-color: #7f8c8d;
    }
  `}
`;

export const ErrorMessage = styled.span`
  font-size: 0.85rem;
  color: #e74c3c;
  margin-top: 0.25rem;
`;
