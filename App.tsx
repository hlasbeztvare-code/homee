import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapComponent } from './src/interfaces/components/MapComponent';
import { FounderDashboard } from './src/interfaces/screens/FounderDashboard';
import { theme } from './src/shared/theme/theme';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

// Placeholder for Orders
const OrdersScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
    <Text style={{ fontSize: 18, color: theme.colors.text.main }}>Vaše objednávky</Text>
  </View>
);

// Placeholder for Profile
const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
    <Text style={{ fontSize: 18, color: theme.colors.text.main }}>Profil HoMee</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: theme.colors.accent,
          tabBarInactiveTintColor: theme.colors.text.muted,
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: theme.colors.border,
            height: 65,
            paddingBottom: 10,
          },
        })}
      >
        <Tab.Screen 
          name="Mapa" 
          component={MapComponent} 
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="map" size={size} color={color} />,
          }}
        />
        <Tab.Screen 
          name="Objednávky" 
          component={OrdersScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />,
          }}
        />
        <Tab.Screen 
          name="Profil" 
          component={ProfileScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
          }}
        />
        {/* Hidden Founder Route (accessible via direct link or secret gesture) */}
        <Tab.Screen 
          name="Founder" 
          component={FounderDashboard} 
          options={{
            tabBarButton: () => null, // Hide from Tab Bar
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Clean code comment: App navigation structure locked. Sky Blue Dominance.
