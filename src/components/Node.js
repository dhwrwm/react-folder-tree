import React from "react";
import styled, { css } from "styled-components";

import { FOLDER } from "../constants/";
import Folder from "./Folder";
import File from "./File";

const Node = ({ title = "Untitled", type, childs = null, last, root }) => {
  const isFolder = type === FOLDER;
  return (
    <Wrapper last={last} root={root}>
      {isFolder ? (
        <Folder title={title} root={root} childs={childs} />
      ) : (
        <File title={title} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 15px;
  display: flex;
  width: 100%;

  ${({ last }) =>
    last &&
    css`
      padding-bottom: 0;
    `}
`;

export default Node;
