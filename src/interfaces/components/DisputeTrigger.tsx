import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../shared/theme/theme';

interface DisputeTriggerProps {
  onDispute: (reason: 'POOR_WORK' | 'UNFINISHED') => void;
}

/**
 * HOMEE AUTONOMOUS TRUST: DisputeTrigger
 * Premium, minimalist UI for reporting issues.
 */
export const DisputeTrigger: React.FC<DisputeTriggerProps> = ({ onDispute }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>NĚCO NENÍ V POŘÁDKU?</Text>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.disputeButton}
          onPress={() => onDispute('POOR_WORK')}
        >
          <Text style={styles.buttonText}>POVRCHNÍ PRÁCE</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.disputeButton}
          onPress={() => onDispute('UNFINISHED')}
        >
          <Text style={styles.buttonText}>NEDOKONČENO</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.hint}>
        Platba bude okamžitě pozastavena v Escrow a systém zahájí reklamaci.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#000',
    borderRadius: 2, // Sharp minimalist corners
    borderWidth: 0.5,
    borderColor: theme.colors.border,
    marginTop: 20,
  },
  label: {
    color: theme.colors.text.secondary,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 3,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  disputeButton: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.primary,
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  hint: {
    color: '#444',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  }
});

// Clean code comment: High-ticket UI standard applied.
