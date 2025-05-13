
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  department?: string;
  course?: string;
}

export interface Certificate {
  id: string;
  name: string;
  category: CertificateCategory;
  domain: CertificateDomain;
  date: string;
  weightage: number;
  blockchainStatus: BlockchainStatus;
  blockchainTxn?: string;
  imageUrl?: string;
}

export enum CertificateCategory {
  ACADEMIC = "Academic",
  EXTRACURRICULAR = "Extracurricular",
  PROFESSIONAL = "Professional",
  TECHNICAL = "Technical",
  SOFT_SKILLS = "Soft Skills"
}

export enum CertificateDomain {
  COMPUTER_SCIENCE = "Computer Science",
  MECHANICAL = "Mechanical",
  ELECTRICAL = "Electrical",
  CIVIL = "Civil",
  MANAGEMENT = "Management",
  ARTS = "Arts",
  SCIENCE = "Science",
  LANGUAGE = "Language",
  OTHER = "Other"
}

export enum BlockchainStatus {
  PENDING = "Pending",
  VERIFIED = "Verified",
  FAILED = "Failed"
}

export interface RankingSummary {
  currentRank: number;
  totalStudents: number;
  rankCategory: string;
  rankProgress: RankProgress;
}

export enum RankProgress {
  UP = "up",
  DOWN = "down",
  STABLE = "stable"
}

export interface WeightageBreakdown {
  total: number;
  byCategory: {
    category: string;
    value: number;
  }[];
  byDomain: {
    domain: string;
    value: number;
  }[];
}

export interface StudentRanking {
  id: string;
  name: string;
  avatar?: string;
  department: string;
  totalWeightage: number;
  rank: number;
  rankChange: number;
}
