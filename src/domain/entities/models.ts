export interface HoMee {
  id: string;
  fullName: string;
  role: 'HOMEE';
  isVerified: boolean;
  isShadow: boolean;
  externalSource?: string;
  externalId?: string;
  rating: number;
  location?: {
    latitude: number;
    longitude: number;
  };
}

export interface Job {
  id: string;
  clientId: string;
  homeeId?: string;
  serviceId: string;
  status: 'PENDING' | 'ACTIVE' | 'DONE';
  location: {
    latitude: number;
    longitude: number;
  };
  contractSignedAt?: Date;
}

// Clean code comment: Domain entities rebranded to HoMee.
