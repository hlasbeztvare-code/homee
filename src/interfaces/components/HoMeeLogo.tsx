import React from 'react';
import Svg, { Path, Text } from 'react-native-svg';
import { theme } from '../../shared/theme/theme';

/**
 * HOMEE VECTOR LOGO
 * Native SVG rendering for all resolutions.
 * White Roof on Sky Blue or Sky Blue on White.
 */
export const HoMeeLogo: React.FC<{ color?: string; size?: number }> = ({ 
  color = theme.colors.accent, 
  size = 120 
}) => {
  return (
    <Svg width={size} height={size * 0.8} viewBox="0 0 100 80">
      {/* The Roof Icon */}
      <Path 
        d="M10 50 L50 20 L90 50" 
        stroke={color} 
        strokeWidth="6" 
        fill="none" 
        strokeLinecap="round" 
      />
      <Path 
        d="M70 35 V25 H80 V42" 
        stroke={color} 
        strokeWidth="6" 
        fill="none" 
      />
      {/* The Text */}
      <Text
        x="50"
        y="75"
        fill={color}
        fontSize="18"
        fontWeight="bold"
        textAnchor="middle"
        letterSpacing="2"
      >
        HOMEE
      </Text>
    </Svg>
  );
};

// Clean code comment: Vector logo locked. Pixel-perfect for all screens.
