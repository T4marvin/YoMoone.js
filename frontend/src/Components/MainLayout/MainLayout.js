import React from "react";
import styled from "styled-components";

const MainLayout = ({ children }) => {
  return <MainLayoutStyled>{children}</MainLayoutStyled>;
};

const MainLayoutStyled = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default MainLayout;
