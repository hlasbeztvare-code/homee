import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { theme } from '../../shared/theme/theme';

/**
 * SKELETON SCREEN - L-CODE ULTIMATE
 * Replaces loading spinners for a seamless, anticipatory experience.
 */
export const SkeletonLoader: React.FC<{ width: any; height: number; borderRadius?: number }> = ({ 
  width, 
  height, 
  borderRadius = 8 
}) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.7,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View 
      style={[
        styles.skeleton, 
        { width, height, borderRadius, opacity }
      ]} 
    />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#1F1F1F',
  }
});

// Clean code comment: Optimistic UI active. Spinners eliminated.
