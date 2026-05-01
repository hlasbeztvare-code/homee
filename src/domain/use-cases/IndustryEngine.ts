import { HoMee } from '../entities/models';

/**
 * MULTI-INDUSTRY REGISTRY - L-CODE TOTAL DOMINANCE
 * Central engine for segment validation and certification wall enforcement.
 */
export class IndustryEngine {
  
  public static readonly SEGMENTS = {
    HOME: ['Úklid', 'Žehlení', 'Mytí oken'],
    WELLNESS: ['Masáže', 'Fyzioterapie', 'IV Recovery'],
    GASTRO_RESCUE: ['Výpomoc v kuchyni', 'Servis', 'B2B Urgent'],
    OFFICE: ['Údržba', 'IT podpora'],
    GARDEN: ['Zahradní práce'],
    CARE_ASSIST: ['Senior Mode', 'Osobní asistence'],
    PET_CARE: ['Hlídání mazlíčků', 'Venčení'],
    LOCKSMITH: ['Nouzové otevření', 'Zabezpečení']
  };

  /**
   * Certification Wall Enforcement
   */
  public static validateQualification(homee: HoMee, segment: string): boolean {
    console.log(`[INDUSTRY] Enforcing Certification Wall for ${segment}...`);

    const certs = (homee as any).certifications || [];

    switch (segment) {
      case 'GASTRO_RESCUE':
        return certs.includes('HEALTH_CARD');
      
      case 'WELLNESS':
      case 'PHYSIO_PRO':
      case 'IV_RECOVERY':
        return certs.includes('MEDICAL_LICENSE');
      
      case 'CARE_ASSIST':
      case 'LOCKSMITH':
        // Requires BankID + Manual Criminal Record Validation
        return homee.isVerified && certs.includes('CRIMINAL_RECORD_CLEAN');

      case 'PET_CARE':
        return certs.includes('PET_HANDLING_CERT');

      default:
        return homee.isVerified; // Base segments require only BankID
    }
  }

  /**
   * Accessibility Mode Check
   */
  public static useAccessibilityUI(segment: string): boolean {
    return segment === 'CARE_ASSIST';
  }

  /**
   * Emergency Priority Check
   */
  public static isEmergency(segment: string): boolean {
    return ['LOCKSMITH', 'GASTRO_RESCUE'].includes(segment);
  }
}

// Clean code comment: Multi-industry registry locked. Total Dominance active.
