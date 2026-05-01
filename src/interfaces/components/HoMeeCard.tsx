import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HoMee } from '../../domain/entities/models';
import { theme } from '../../shared/theme/theme';

interface HoMeeCardProps {
  homee: HoMee;
  onPress: (id: string) => void;
}

/**
 * HoMeeCard Component
 * Displays shadow profiles with a 'HoMee Pro' badge.
 */
export const HoMeeCard: React.FC<HoMeeCardProps> = ({ homee, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.card, homee.isShadow && styles.shadowCard]} 
      onPress={() => onPress(homee.id)}
    >
      <View style={styles.header}>
        <Text style={styles.name}>{homee.fullName}</Text>
        {homee.isShadow ? (
          <View style={styles.partnerBadge}>
            <Text style={styles.badgeText}>HoMee Pro</Text>
          </View>
        ) : (
          homee.isVerified && <Text>🛡️</Text>
        )}
      </View>
      
      <Text style={styles.rating}>⭐ {homee.rating}</Text>
      
      {homee.isShadow && (
        <Text style={styles.unlockText}>Kliknutím odemknete plný profil přes BankID</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  shadowCard: {
    borderColor: theme.colors.primary, // Gold border for partners
    borderStyle: 'dashed',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  partnerBadge: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: '#000',
    fontSize: 10,
    fontWeight: '900',
  },
  rating: {
    color: theme.colors.text.gold,
    fontSize: 14,
  },
  unlockText: {
    color: theme.colors.text.secondary,
    fontSize: 12,
    marginTop: 8,
    fontStyle: 'italic',
  }
});

// Clean code comment: UI rebranded to HoMee Pro.
