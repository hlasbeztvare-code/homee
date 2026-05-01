import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { theme } from '../../shared/theme/theme';
import { SmartMatchEngine } from '../../domain/use-cases/SmartMatchEngine';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * QUICK ORDER SCREEN - 3-CLICK DOMINANCE
 * 1. Choose -> 2. Confirm -> 3. Match
 */
export const QuickOrderScreen = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleOrder = async () => {
    setLoading(true);
    // Click 3: Smart Match Algorithm automatically picks the best HoMee
    const match = await SmartMatchEngine.findUltimateMatch(50.08, 14.43, 'CLEANING');
    setLoading(false);
    if (match) {
      alert(`HoMee nalezen! ${match.fullName} je na cestě.`);
    }
  };

  return (
    <LinearGradient colors={theme.colors.gradients.deep} style={styles.container}>
      <Text style={styles.header}>HoMee</Text>

      {step === 1 && (
        <View style={styles.content}>
          <Text style={styles.title}>Co potřebujete?</Text>
          {/* Click 1: Select Service */}
          <TouchableOpacity style={styles.option} onPress={() => setStep(2)}>
            <Text style={styles.optionText}>PRÉMIOVÝ ÚKLID</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === 2 && (
        <View style={styles.content}>
          <Text style={styles.title}>Poloha zjištěna</Text>
          <Text style={styles.subtitle}>Pařížská 1, Praha 1</Text>
          {/* Click 2: Confirm & Match */}
          <TouchableOpacity 
            style={[styles.confirmButton, { backgroundColor: theme.colors.accent }]}
            onPress={handleOrder}
          >
            <Text style={styles.confirmText}>OBJEDNAT OKAMŽITĚ</Text>
          </TouchableOpacity>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  header: {
    color: theme.colors.accent,
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 4,
    position: 'absolute',
    top: 60,
    left: 30,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  subtitle: {
    color: theme.colors.text.muted,
    fontSize: 18,
    marginBottom: 60,
  },
  option: {
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderColor: theme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  optionText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
  },
  confirmButton: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  confirmText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  }
});

// Clean code comment: 3-Click Rule implemented. UX friction eliminated.
