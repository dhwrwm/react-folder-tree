import * as React from "react";

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 60 60" fill="#9FA8DA" {...props}>
      <path d="M14 23.5a.566.566 0 00-.545.417L2 52.5v1c0 .734-.047 1 .565 1h44.759c1.156 0 2.174-.779 2.45-1.813L60 24.5v-1H14z" />
      <path d="M12.731 21.5H54v-6.268a2.735 2.735 0 00-2.732-2.732H26.515l-5-7H2.732A2.736 2.736 0 000 8.232v41.796l10.282-26.717c.275-1.032 1.293-1.811 2.449-1.811z" />
    </svg>
  );
}

export default SvgComponent;
