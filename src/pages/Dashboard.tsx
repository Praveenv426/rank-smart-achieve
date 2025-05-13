
import { FileBox, Award, TrendingUp, BarChart3 } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentCertificates } from "@/components/dashboard/RecentCertificates";
import { RankCard } from "@/components/dashboard/RankCard";
import { RankProgressChart } from "@/components/dashboard/RankProgressChart";
import { WeightageDonutChart } from "@/components/dashboard/WeightageDonutChart";
import { certificates, rankingSummary, weightageBreakdown, rankProgressionData } from "@/lib/mock-data";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Certificates"
          value={certificates.length}
          icon={<FileBox size={20} />}
          description="All your uploaded certificates"
        />
        <StatCard
          title="Total Weightage"
          value={weightageBreakdown.total}
          icon={<Award size={20} />}
          description="Accumulated points from all certificates"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Current Rank"
          value={rankingSummary.currentRank}
          icon={<BarChart3 size={20} />}
          description={`Out of ${rankingSummary.totalStudents} students`}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Verified Certificates"
          value={certificates.filter(c => c.blockchainStatus === "Verified").length}
          icon={<TrendingUp size={20} />}
          description="Certificates verified on blockchain"
        />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentCertificates certificates={certificates} />
        </div>
        <RankCard data={rankingSummary} />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <WeightageDonutChart data={weightageBreakdown} type="category" />
        <RankProgressChart data={rankProgressionData} />
      </div>
    </div>
  );
};

export default Dashboard;
