import { Platform } from 'react-native';

/**
 * HIGH-END DESIGN SYSTEM: HoMee Sky Launch
 * Color Scheme: Sky Blue & White
 */
export const theme = {
  colors: {
    background: '#FFFFFF', // Pure White
    surface: '#F5F9FF',    // Soft Blue-White
    accent: '#007AFF',     // Sky Blue
    accentDark: '#0056B3',
    text: {
      main: '#0A1F44',     // Deep Navy for readability
      muted: '#8E9AAF',
      blue: '#007AFF',
    },
    gradients: {
      sky: ['#007AFF', '#00C6FF'],
      clean: ['#FFFFFF', '#F5F9FF'],
    },
    border: '#E1E8F0',
  },
  typography: {
    fontFamily: Platform.select({
      ios: 'Inter-Medium',
      android: 'Lexend-Medium',
      default: 'System',
    }),
    letterSpacing: {
      tight: -0.5,
      wide: 1.5,
    }
  },
  animation: {
    spring: {
      damping: 20,
      stiffness: 90,
      mass: 1,
    }
  }
};

// Clean code comment: Sky Blue & White theme applied. Monday launch ready.
