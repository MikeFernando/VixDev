import styled from "styled-components";

 
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  
`;

export const SearchBox = styled.label`
    display: flex;
    flex: 1;
    align-items: center;

    padding: 0.8rem 2rem;
    max-width: 20rem;

    position: relative;
    background: var(--shape);
    border-radius: 0.25rem;

    input {
      border: 1px solid var(--shape);
      outline: 0;
      font-size: 1rem;
      width: 100%;
      padding-right: 2rem;
      color: var(--text-title);

      &::placeholder {
        color: var(--text-body);
      }
    }

    svg {
      width: 20px;
      height: 20px;
      color: var(--text-body);
    }
` 

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.7rem;
  margin-right: 1rem;

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;

    span {
      margin-right: 1rem;
    }
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.2rem;

    &.icons_status {
      text-align: center;
      svg {
        width: 24px;
        height: 24px;
      }
    }

    select {
      background: transparent; /* importante para exibir o novo ícone */
      font-size: 1rem;
      line-height: 1;
      border: 0;
      border-radius: 0;
      height: 34px;
      -webkit-appearance: none;
      color: var(--text-body);
    }

    &:first-child {
      color: var(--text-title);
    }
  }
`;
