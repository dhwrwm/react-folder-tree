import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Node from "./Node";

const Tree = ({ data = [] }) => {
  return (
    <Wrapper>
      {data.map((item, index) => {
        return <Node key={index} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

Tree.propTypes = {
  data: PropTypes.array,
};

export default Tree;
