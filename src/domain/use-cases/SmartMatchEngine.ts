import { supabase } from '../../infrastructure/api/supabase';
import { HoMee } from '../entities/models';
import { IndustryEngine } from './IndustryEngine';

/**
 * SMART MATCH ENGINE - L-CODE ULTIMATE
 * Automatic assignment logic: No chatting, just results.
 */
export class SmartMatchEngine {
  
  /**
   * Assigns the absolute best HoMee for a job based on weighted scoring.
   */
  public static async findUltimateMatch(
    latitude: number, 
    longitude: number, 
    serviceType: string
  ): Promise<HoMee | null> {
    console.log(`[SMART-MATCH] Calculating best HoMee for ${serviceType}...`);

    // 1. Fetch candidates in 5km radius via PostGIS
    const { data: candidates, error } = await supabase.rpc('get_nearby_homees', {
      client_location: `POINT(${longitude} ${latitude})`,
      radius_meters: 5000
    });

    if (error || !candidates || candidates.length === 0) {
      console.warn('[SMART-MATCH] No verified HoMees in range.');
      return null;
    }

    // 2. AI Weighting Algorithm
    // For Critical Priority (LOCKSMITH), we prioritize absolute proximity over rating.
    const isCritical = IndustryEngine.isCriticalPriority(serviceType);

    const scoredCandidates = candidates.map((c: any) => ({
      ...c,
      finalScore: isCritical 
        ? (this.calculateProximityScore(c.distance) * 1.0) // 100% weight on distance
        : (c.rating * 0.5) + (this.calculateProximityScore(c.distance) * 0.5)
    }));

    // 3. Sort by final score
    const winner = scoredCandidates.sort((a, b) => b.finalScore - a.finalScore)[0];

    console.log(`[SMART-MATCH] Match found: ${winner.full_name} (Score: ${winner.finalScore.toFixed(2)})`);
    
    return winner;
  }

  private static calculateProximityScore(distanceMeters: number): number {
    // 5km range: 5000m = 0 points, 0m = 5 points
    return Math.max(0, 5 - (distanceMeters / 1000));
  }
}

// Clean code comment: Match engine optimized. 0% manual selection.
