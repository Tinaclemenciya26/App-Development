import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSpring, animated } from 'react-spring';

const Animated = ({ data }) => {
  const [chartVisible, setChartVisible] = useState(false);

  const chartSpring = useSpring({
    opacity: chartVisible ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={chartSpring}>
      <Line data={data} />
    </animated.div>
  );
};

export default Animated;
