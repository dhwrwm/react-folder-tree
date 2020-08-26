import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Node from "./Node";

const Tree = ({ data = [], width = 100 }) => {
  return (
    <Wrapper width={width}>
      {data.map((item, index) => {
        return <Node key={index} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
`;

Tree.propTypes = {
  data: PropTypes.array,
};

export default Tree;
