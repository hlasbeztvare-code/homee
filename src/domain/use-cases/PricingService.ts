/**
 * PRICING SERVICE - L-CODE TOTAL DOMINANCE
 * Final production rates with 25/75 Split logic.
 * Fixed prices in CZK including Platform Margin.
 */
export class PricingService {
  
  private static readonly RATES: Record<string, number> = {
    'HOME': 400,            // HoMee: 300 Kč
    'GASTRO_RESCUE': 550,   // HoMee: 412.5 Kč
    'WELLNESS': 1200,       // HoMee: 900 Kč
    'LOCKSMITH': 1500,      // HoMee: 1125 Kč (Fix)
    'CARE_ASSIST': 350,     // HoMee: 262.5 Kč
  };

  private static readonly PLATFORM_MARGIN = 0.25; // 25% L-Code Dynamics Margin

  /**
   * Returns final customer price for a segment.
   * Checks for active 'Zlatý vstup' (1 CZK) promotion for new users.
   */
  public static getCustomerPrice(segment: string, isFirstOrder: boolean = false): number {
    if (isFirstOrder && segment === 'HOME') {
      console.log('[PROMO] Zlatý vstup active: 1 CZK');
      return 1;
    }
    return this.RATES[segment.toUpperCase()] || 400;
  }

  /**
   * Returns the payout for the HoMee (75% share).
   */
  public static getHoMeePayout(segment: string): number {
    const total = this.RATES[segment.toUpperCase()] || 400;
    return total * (1 - this.PLATFORM_MARGIN);
  }

  /**
   * Returns the platform's cut (25%).
   */
  public static getPlatformFee(segment: string): number {
    const total = this.RATES[segment.toUpperCase()] || 400;
    return total * this.PLATFORM_MARGIN;
  }
}

// Clean code comment: Pricing Engine 2026 locked. Financial dominance confirmed. SMRK.
