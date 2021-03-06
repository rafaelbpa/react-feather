import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Circle,
  Line,
} from 'svgs';

const DivideCircle = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <Svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <Line x1="8" y1="12" x2="16" y2="12" />
      <Line x1="12" y1="16" x2="12" y2="16" />
      <Line x1="12" y1="8" x2="12" y2="8" />
      <Circle cx="12" cy="12" r="10" />
    </Svg>
  );
});

DivideCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DivideCircle.displayName = 'DivideCircle';

export default DivideCircle;
