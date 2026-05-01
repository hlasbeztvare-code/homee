import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../shared/theme/theme';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * FOUNDER ADMIN DASHBOARD - FOR PEPA ONLY
 * Standard: L-CODE VICTORIA
 * Visual: Deep Navy + Gold Accents
 */
export const FounderDashboard = () => {
  // Mock data representing the real-time engine state
  const stats = {
    totalProfit: '1,280,450 Kč',
    activeEscrow: '42 Active Tasks',
    avgArrivalTime: '24 min',
    ttv: '5,121,800 Kč' // Total Transaction Volume
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#0A1F44', '#050505']} style={styles.header}>
        <Text style={styles.founderTitle}>VÍTEJTE, PEPO</Text>
        <Text style={styles.subtitle}>HoMee: Totální Dominance v Reálném Čase</Text>
      </LinearGradient>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>ČISTÝ ZISK (25%)</Text>
          <Text style={styles.statValue}>{stats.totalProfit}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>AKTIVNÍ ESCROW</Text>
          <Text style={styles.statValue}>{stats.activeEscrow}</Text>
        </View>

        <View style={[styles.statCard, { borderColor: '#D4AF37', borderWidth: 1 }]}>
          <Text style={[styles.statLabel, { color: '#D4AF37' }]}>PRŮMĚRNÝ DOJEZD</Text>
          <Text style={[styles.statValue, { color: '#D4AF37' }]}>{stats.avgArrivalTime}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>CELKOVÝ OBJEM (TTV)</Text>
          <Text style={styles.statValue}>{stats.ttv}</Text>
        </View>
      </View>

      <View style={styles.mapSection}>
        <Text style={styles.sectionTitle}>ŽIVÝ MAPOVÝ ENGINE (POSTGIS ACTIVE)</Text>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>74 AKTIVNÍCH POMOCNÍKŮ V POHYBU</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
  },
  header: {
    padding: 40,
    paddingTop: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#1F1F1F',
  },
  founderTitle: {
    color: '#D4AF37',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 4,
  },
  subtitle: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 10,
    opacity: 0.7,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    gap: 15,
  },
  statCard: {
    width: '47%',
    padding: 20,
    backgroundColor: '#121212',
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#1F1F1F',
  },
  statLabel: {
    color: '#8E9AAF',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  statValue: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    marginTop: 10,
  },
  mapSection: {
    padding: 20,
  },
  sectionTitle: {
    color: '#D4AF37',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 15,
  },
  mapPlaceholder: {
    width: '100%',
    height: 250,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#1F1F1F',
  },
  mapText: {
    color: '#007AFF',
    fontSize: 12,
    fontWeight: 'bold',
  }
});

// Clean code comment: Founder Dashboard locked. Victoria aesthetic active.
