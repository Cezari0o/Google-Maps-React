import styled from "styled-components";


const Layout = styled.div`

  background-color: #272525;
  color: #fdf2f2;

  --padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 100vw;

  .map-container {
    height: 500px;
    width: 75vw;
  }

  padding-top: var(--padding);
  padding-bottom: var(--padding);
  
`;

export const Button = styled.button`

  color: white;
  background-color: rgb(46, 101, 255);

  border: none;
  border-radius: 3px;

  padding: 10px;

  text-transform: capitalize;
`;

export const Title = styled.h1`
  
  --padding-y: 10px;
  font-size: 2rem;
  padding-bottom: 10px;
`;

export const ButtonStack = styled.div`
  
  display: flex;
  gap: 10px;
  padding-bottom: 20px;
`;

export default Layout;