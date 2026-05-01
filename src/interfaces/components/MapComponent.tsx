import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { theme } from '../../shared/theme/theme';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

/**
 * MASTER MAP LAYER - L-CODE GUARDIAN
 * Interactive map focused on Prague/Říčany with Industry Drawer.
 */
export const MapComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const initialRegion = {
    latitude: 50.0755, // Prague
    longitude: 14.4378,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const agents = [
    { id: 1, type: 'LOCKSMITH', lat: 50.08, lng: 14.42, icon: 'key' },
    { id: 2, type: 'WELLNESS', lat: 50.07, lng: 14.45, icon: 'medical' },
    { id: 3, type: 'CLEANING', lat: 50.09, lng: 14.43, icon: 'brush' },
  ];

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        customMapStyle={mapStyle}
      >
        {agents.map(agent => (
          <Marker
            key={agent.id}
            coordinate={{ latitude: agent.lat, longitude: agent.lng }}
            title={agent.type}
          >
            <View style={styles.markerContainer}>
              <Ionicons name={agent.icon as any} size={20} color="#FFF" />
            </View>
          </Marker>
        ))}
      </MapView>

      {/* The Industry Drawer (BottomSheet) */}
      <View style={[styles.drawer, { height: drawerOpen ? height * 0.5 : 120 }]}>
        <TouchableOpacity 
          style={styles.drawerHandle} 
          onPress={() => setDrawerOpen(!drawerOpen)}
        >
          <View style={styles.handleBar} />
        </TouchableOpacity>

        <Text style={styles.drawerTitle}>POTŘEBUJETE POMOC?</Text>

        <ScrollView horizontal={!drawerOpen} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryList}>
          <CategoryItem icon="unlock" label="Zámečníci" color="#007AFF" />
          <CategoryItem icon="pulse" label="Fyzio & Infuze" color="#00C6FF" />
          <CategoryItem icon="home" label="Úklid & Vaření" color="#8E9AAF" />
          <CategoryItem icon="heart" label="HOMEE Care" color="#D32F2F" />
          <CategoryItem icon="paw" label="Pet Concierge" color="#0056B3" />
        </ScrollView>
      </View>
    </View>
  );
};

const CategoryItem = ({ icon, label, color }: { icon: string, label: string, color: string }) => (
  <TouchableOpacity style={styles.categoryItem}>
    <View style={[styles.iconCircle, { backgroundColor: color }]}>
      <Ionicons name={icon as any} size={24} color="#FFF" />
    </View>
    <Text style={styles.categoryLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    backgroundColor: theme.colors.accent,
    padding: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  drawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  drawerHandle: {
    alignItems: 'center',
    marginBottom: 10,
  },
  handleBar: {
    width: 40,
    height: 5,
    backgroundColor: '#E1E8F0',
    borderRadius: 3,
  },
  drawerTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: theme.colors.text.muted,
    letterSpacing: 2,
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryList: {
    flexDirection: 'row',
    gap: 20,
  },
  categoryItem: {
    alignItems: 'center',
    width: 80,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: theme.colors.text.main,
    textAlign: 'center',
  }
});

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [{ "color": "#f5f5f5" }]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#616161" }]
  }
];

// Clean code comment: Master Map Layer active. Industry Drawer integrated.
