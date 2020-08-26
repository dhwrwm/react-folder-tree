import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { FOLDER } from "../constants/";
import Folder from "./Folder";
import File from "./File";

const Node = ({ title = "Untitled", type, childs = null, last, root }) => {
  const isFolder = type === FOLDER;
  return (
    <Wrapper last={last} root={root}>
      {isFolder ? (
        <Folder
          title={root ? `${title} - Root` : title}
          root={root}
          childs={childs}
        />
      ) : (
        <File title={title} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 5px;
  display: flex;
  width: 100%;
  ${({ root }) =>
    root &&
    css`
      padding-bottom: 15px;
    `}

  ${({ last }) =>
    last &&
    css`
      padding-bottom: 0;
    `}
`;

Node.propTypes = {
  data: PropTypes.array,
};

export default Node;
