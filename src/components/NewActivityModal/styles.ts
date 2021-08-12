import styled from "styled-components";
import { darken } from 'polished';

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'cyan_50' | 'green_50' | 'red_50';
  textColorActive: 'cyan_500' | 'green_500' | 'red_500';
}

const colors = {
  cyan_50: '#e2f1fa',
  cyan_500: '#61dcfb',
  green_50: '#d8fae3',
  green_500: '#33cc95',
  red_50: '#fae5e5',
  red_500: '#e52e54'
}

export const Form = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    background: #e7e9ee;
    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    border-radius: 0.5rem;
    border: 1px solid var(--green);
    margin-top: 1.5rem;

    font-size: 1.1rem;
    font-weight: 600;
    color: var(--shape);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TypeStatus = styled.div`
  display: grid;
  margin: 1rem 0;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  border: 0;
  background: var(--shape);
`;

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    padding: 1rem 2.5rem;
    color: var(--text-title);

    background: ${(props) => props.isActive 
      ? colors[props.activeColor]
      : 'transparent'
    };

    color: ${(props) => props.isActive 
      ? colors[props.textColorActive]
      : '#363f5f'
    };

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }
`;

