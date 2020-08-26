import React from "react";
import styled, { css } from "styled-components";

import structure from "./api/structure";
import Tree from "./components/Tree";

function App() {
  return (
    <AppWrapper>
      <Sections percentage={25}>
        <LeftSectionWrapper>
          <Title>Folders</Title>
          <Tree data={structure} />
        </LeftSectionWrapper>
      </Sections>
      <Sections percentage={75} right>
        <h1>Rest of the stuff here ...</h1>
      </Sections>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fafafa;
  display: flex;
  flex-direction: row;
`;

const Sections = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
  overflow: scroll;
  border: 1px solid #bdbdbd;
  ${({ percentage }) =>
    percentage &&
    css`
      width: ${percentage}%;
    `}
  ${({ right }) =>
    right &&
    css`
      display: flex;
      background: #fff;
      border-left-width: 0;
      align-items: center;
      justify-content: center;
    `}
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const LeftSectionWrapper = styled.div`
  padding: 10px;
`;

export default App;
