import styled from "styled-components";

export const ButtonStack = styled.div`
  
  display: flex;
  gap: 10px;
  padding-bottom: 20px;
  flex-wrap: wrap;
`;

export const Button = styled.button`

  color: white;
  background-color: var(--secondary-color);

  border: none;
  border-radius: 3px;

  padding: 10px;

  text-transform: capitalize;

  :focus {
    background-color: var(--darker-sec-color);
  }

  :hover {
    background-color: var(--darker-sec-color);
  }
`;