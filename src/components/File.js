import React from "react";
import styled from "styled-components";

import { FileIcon } from "../svgs";

const Folder = ({ title = "Untitled" }) => {
  return (
    <Wrapper>
      <FileIcon width={20} height={20} fill="#3f51b5" />
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.p`
  font-size: 16px;
  color: #3f51b5;
  padding-left: 5px;
  font-family: "Gill Sans", sans-serif;
`;

export default Folder;
