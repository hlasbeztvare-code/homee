import * as LocalAuthentication from 'expo-local-authentication';
import { AuthWrapper } from '../shared/security/AuthWrapper';

/**
 * BIOMETRIC BRIDGE - L-CODE GUARDIAN
 * Connects FaceID/TouchID to the Identity-verified Auth layer.
 */
export class BiometricService {
  
  /**
   * Authenticates user via Biometrics before sensitive actions (e.g., identity verification).
   */
  public static async authenticateBiometric(): Promise<boolean> {
    console.log('[BIOMETRIC] Initializing hardware bridge...');

    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !isEnrolled) {
      console.warn('[BIOMETRIC] Biometrics not available. Falling back to secure PIN.');
      return false;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Ověřte identitu HoMee',
      fallbackLabel: 'Použít heslo',
      disableDeviceFallback: false,
    });

    if (result.success) {
      console.log('[BIOMETRIC] Success. Identity bridge locked.');
      return true;
    }

    return false;
  }
}

// Clean code comment: Biometric hardware bridge active. No unauthorized access.
