import React from 'react';
import Svg, {Path} from 'react-native-svg';

const TrashIcon: React.FC<{size?: number; color?: string}> = ({
  size = 24,
  color = '#e63946',
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 6h18M19 6l-1.867 14.046A2 2 0 0 1 15.141 22H8.86a2 2 0 0 1-1.992-1.954L5 6m2-3h10l-1-2H8l-1 2Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TrashIcon;
