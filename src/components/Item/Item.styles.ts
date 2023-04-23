import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  overflow: hidden;

  button {
    border-radius: 0 0 20px 20px;
    color: inherit;
  }

  img {
    max-height: 250px;
    object-fit: cover;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
