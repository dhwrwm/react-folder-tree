import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      height={512}
      fill="#9FA8DA"
      viewBox="0 0 551.13 551.13"
      width={512}
      {...props}
    >
      <path d="M361.679 275.565L137.783 499.462v51.668l275.565-275.565L137.783 0v51.668z" />
    </svg>
  );
}

export default SvgComponent;
