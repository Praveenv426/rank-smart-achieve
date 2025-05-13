
import { 
  User, 
  Certificate, 
  CertificateCategory, 
  CertificateDomain, 
  BlockchainStatus, 
  RankingSummary, 
  RankProgress,
  WeightageBreakdown,
  StudentRanking
} from "@/types";

// Mock user
export const currentUser: User = {
  id: "u1",
  name: "Alex Johnson",
  email: "alex.johnson@university.edu",
  avatar: "https://i.pravatar.cc/300?img=8",
  department: "Computer Science",
  course: "Bachelor of Science"
};

// Mock certificates
export const certificates: Certificate[] = [
  {
    id: "c1",
    name: "Advanced Web Development",
    category: CertificateCategory.TECHNICAL,
    domain: CertificateDomain.COMPUTER_SCIENCE,
    date: "2023-06-15",
    weightage: 8.5,
    blockchainStatus: BlockchainStatus.VERIFIED,
    blockchainTxn: "0x8a7d953f45afde8911f4b2276e5e11b9a31264c4d3ccd526c8b87c9a4c2b19a",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "c2",
    name: "Machine Learning Fundamentals",
    category: CertificateCategory.ACADEMIC,
    domain: CertificateDomain.COMPUTER_SCIENCE,
    date: "2023-04-22",
    weightage: 7.0,
    blockchainStatus: BlockchainStatus.VERIFIED,
    blockchainTxn: "0x9b2c15a3e4f6d789c0a1b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4e5f6",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "c3",
    name: "Project Management Professional",
    category: CertificateCategory.PROFESSIONAL,
    domain: CertificateDomain.MANAGEMENT,
    date: "2023-05-10",
    weightage: 6.5,
    blockchainStatus: BlockchainStatus.PENDING,
    imageUrl: "/placeholder.svg"
  },
  {
    id: "c4",
    name: "Cloud Computing AWS Certified",
    category: CertificateCategory.TECHNICAL,
    domain: CertificateDomain.COMPUTER_SCIENCE,
    date: "2023-07-20",
    weightage: 9.0,
    blockchainStatus: BlockchainStatus.VERIFIED,
    blockchainTxn: "0xef9a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "c5",
    name: "Leadership Workshop",
    category: CertificateCategory.SOFT_SKILLS,
    domain: CertificateDomain.MANAGEMENT,
    date: "2023-08-05",
    weightage: 5.0,
    blockchainStatus: BlockchainStatus.FAILED,
    imageUrl: "/placeholder.svg"
  }
];

// Mock ranking
export const rankingSummary: RankingSummary = {
  currentRank: 12,
  totalStudents: 250,
  rankCategory: "Computer Science Department",
  rankProgress: RankProgress.UP
};

// Mock weightage breakdown
export const weightageBreakdown: WeightageBreakdown = {
  total: 36.0,
  byCategory: [
    { category: "Technical", value: 17.5 },
    { category: "Academic", value: 7.0 },
    { category: "Professional", value: 6.5 },
    { category: "Soft Skills", value: 5.0 }
  ],
  byDomain: [
    { domain: "Computer Science", value: 24.5 },
    { domain: "Management", value: 11.5 }
  ]
};

// Mock leaderboard data
export const leaderboardData: StudentRanking[] = [
  {
    id: "s1",
    name: "Emma Davis",
    avatar: "https://i.pravatar.cc/300?img=5",
    department: "Computer Science",
    totalWeightage: 42.5,
    rank: 1,
    rankChange: 0
  },
  {
    id: "s2",
    name: "Liam Wilson",
    avatar: "https://i.pravatar.cc/300?img=12",
    department: "Computer Science",
    totalWeightage: 40.8,
    rank: 2,
    rankChange: 1
  },
  {
    id: "s3",
    name: "Sophia Martinez",
    avatar: "https://i.pravatar.cc/300?img=21",
    department: "Electrical",
    totalWeightage: 39.2,
    rank: 3,
    rankChange: -1
  },
  {
    id: "s4",
    name: "Noah Brown",
    avatar: "https://i.pravatar.cc/300?img=30",
    department: "Computer Science",
    totalWeightage: 38.5,
    rank: 4,
    rankChange: 2
  },
  {
    id: "s5",
    name: "Olivia Jones",
    avatar: "https://i.pravatar.cc/300?img=14",
    department: "Management",
    totalWeightage: 37.0,
    rank: 5,
    rankChange: 0
  },
  {
    id: "s6",
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/300?img=8",
    department: "Computer Science",
    totalWeightage: 36.0,
    rank: 12,
    rankChange: 3
  }
];

// Mock chart data for rank progression
export const rankProgressionData = [
  { month: "Jan", rank: 45 },
  { month: "Feb", rank: 42 },
  { month: "Mar", rank: 35 },
  { month: "Apr", rank: 30 },
  { month: "May", rank: 25 },
  { month: "Jun", rank: 20 },
  { month: "Jul", rank: 15 },
  { month: "Aug", rank: 12 }
];
