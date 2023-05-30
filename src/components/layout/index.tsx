import styled from "styled-components";

const Layout = styled.div`

  --primary-color: #272525;
  --secondary-color: rgb(23, 131, 194);
  --darker-sec-color: rgb(46, 101, 255);

  background-color: var(--primary-color);
  color: #fdf2f2;

  --padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 100%;

  .color-1 {
    color: var(--primary-color);
  }

  .map-container {
    height: 500px;
    width: 75vw;

    border-radius: 15px;
    border: 3px solid var(--secondary-color);
  }

  .d-none {
    display: none !important;
  }
  
`;

export default Layout;