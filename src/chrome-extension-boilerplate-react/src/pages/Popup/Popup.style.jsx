import styled from 'styled-components';

export const StHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-bottom: 1rem;
    font-size: 2.2rem;
  }

  > p {
    margin: 0;
    text-align: center;
  }
`;

export const StContent = styled.p`
  margin-top: 3.125rem;
  font-size: 1rem;
  font-weight: bold;
`;

export const StToast = styled.div`
  margin: 1.25rem 0;
  padding: 0.5rem 2rem;
  background-color: white;
  color: #343541;
  box-shadow: 0rem 0rem 0.625rem rgba(0, 0, 0, 0.2);
  border-radius: 0.3125rem;

  > p {
    font-size: 1rem;
  }
`;

export const StProgressbar = styled.div`
  margin-bottom: 1.25rem;
  height: 0.3125rem;
  background-color: #ffd643;
  transition: width 0.2s linear;
`;
