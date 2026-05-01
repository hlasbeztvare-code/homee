import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../shared/theme/theme';
import { BiometricService } from '../../infrastructure/services/BiometricService';
import { BillingEngine } from '../../domain/use-cases/BillingEngine';
import { SmartMatchEngine } from '../../domain/use-cases/SmartMatchEngine';
import { HoMeeLogo } from './HoMeeLogo';

/**
 * ULTIMATE CHECKOUT - 3-CLICK RULE
 * Standard: L-CODE GUARDIAN
 */
export const UltimateCheckout: React.FC<{ serviceType: string; price: number }> = ({ 
  serviceType, 
  price 
}) => {
  const [loading, setLoading] = useState(false);

  const handleFinalOrder = async () => {
    // CLICK 3: Pay & Match
    setLoading(true);
    
    // 1. Biometric Check (FaceID/TouchID)
    const isAuthenticated = await BiometricService.authenticateBiometric();
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }

    // 2. Initialize Native Pay Sheet
    await BillingEngine.initializePaymentSheet(price);

    // 3. Smart Match Activation
    const match = await SmartMatchEngine.findUltimateMatch(50.08, 14.43, serviceType);

    setLoading(false);
    if (match) {
      alert(`HoMee nalezen! Smlouva podepsána, pojištění aktivní. ${match.fullName} přijede do 30 min.`);
    }
  };

  return (
    <View style={styles.container}>
      <HoMeeLogo color={theme.colors.accent} size={80} />
      
      <View style={styles.details}>
        <Text style={styles.serviceName}>{serviceType.toUpperCase()}</Text>
        <Text style={styles.price}>{price} Kč / hod</Text>
        <Text style={styles.info}>Včetně pojištění a 25% marže platformy</Text>
      </View>

      <TouchableOpacity 
        style={styles.payButton} 
        onPress={handleFinalOrder}
        disabled={loading}
      >
        <Text style={styles.payText}>{loading ? 'OVĚŘOVÁNÍ...' : 'OBJEDNAT (APPLE PAY)'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#FFF',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  details: {
    marginVertical: 20,
    alignItems: 'center',
  },
  serviceName: {
    fontSize: 22,
    fontWeight: '900',
    color: theme.colors.text.main,
    letterSpacing: 2,
  },
  price: {
    fontSize: 18,
    color: theme.colors.accent,
    fontWeight: '700',
    marginTop: 5,
  },
  info: {
    fontSize: 10,
    color: theme.colors.text.muted,
    marginTop: 10,
  },
  payButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#000', // Apple Pay Style
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  payText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  }
});

// Clean code comment: 3-Click Checkout active. FaceID integrated.
