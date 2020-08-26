import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Node from "./Node";
import {
  FolderIcon,
  FolderOpenIcon,
  RightArrowIcon,
  DownArrowIcon,
} from "../svgs";

const Folder = ({ title = "Untitled", childs = null, root }) => {
  const [open, toggleOpen] = useState(false);
  return (
    <Wrapper>
      <FolderItem onClick={() => toggleOpen(!open)}>
        {open ? (
          <FolderOpenIcon width={20} height={20} />
        ) : (
          <FolderIcon width={20} height={20} />
        )}
        <Title open={open}>{title}</Title>
        <RightIconWrapper>
          {open ? (
            <RightArrowIcon width={20} height={20} />
          ) : (
            <DownArrowIcon width={20} height={20} />
          )}
        </RightIconWrapper>
      </FolderItem>
      {open && (
        <ChildWrapper>
          {childs.map((item, index) => (
            <Node key={index} {...item} last={index + 1 === childs.length} />
          ))}
        </ChildWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const FolderItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  width: 100%;
`;

const RightIconWrapper = styled.div`
  position: absolute;
  right: 10px;
`;

const ChildWrapper = styled.div`
  padding: 10px 0 0 15px;
`;

const Title = styled.div`
  font-size: 16px;
  color: grey;
  font-family: "Gill Sans", sans-serif;
  padding-left: 5px;
  ${({ open }) =>
    open &&
    css`
      color: #9fa8da;
    `}
`;

Folder.propTypes = {
  data: PropTypes.array,
};

export default Folder;
