import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * OFFLINE PERSISTENCE - L-CODE GUARDIAN
 * Ensures Legal Logs and Contracts are available without network.
 */
export class OfflinePersistenceService {
  private static readonly CONTRACT_DIR = `${FileSystem.documentDirectory}contracts/`;

  /**
   * Downloads and caches a PDF contract for offline access.
   */
  public static async cacheContract(jobId: string, url: string): Promise<string> {
    console.log(`[OFFLINE] Caching contract for Job ${jobId}...`);
    
    await FileSystem.makeDirectoryAsync(this.CONTRACT_DIR, { intermediates: true });
    
    const fileUri = `${this.CONTRACT_DIR}SC_${jobId}.pdf`;
    const download = await FileSystem.downloadAsync(url, fileUri);
    
    return download.uri;
  }

  /**
   * Persists Legal Audit Logs locally.
   */
  public static async persistLegalLog(log: any) {
    const existingLogs = await AsyncStorage.getItem('OFFLINE_LEGAL_LOGS');
    const logs = existingLogs ? JSON.parse(existingLogs) : [];
    logs.push(log);
    await AsyncStorage.setItem('OFFLINE_LEGAL_LOGS', JSON.stringify(logs));
    console.log('[OFFLINE] Legal audit log persisted locally.');
  }

  public static async getOfflineLogs() {
    return await AsyncStorage.getItem('OFFLINE_LEGAL_LOGS');
  }
}

// Clean code comment: Offline vault active. Data persistent.
