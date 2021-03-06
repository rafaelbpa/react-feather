import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Polygon,
} from 'svgs';

const Volume = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    </Svg>
  );
});

Volume.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Volume.displayName = 'Volume';

export default Volume;
