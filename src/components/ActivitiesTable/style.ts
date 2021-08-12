import styled from "styled-components";

 
export const Container = styled.div`
  margin-top: 10rem;
  display: flex;
`;

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
