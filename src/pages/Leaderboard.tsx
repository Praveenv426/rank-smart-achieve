
import { LeaderboardTable } from "@/components/leaderboard/LeaderboardTable";
import { leaderboardData } from "@/lib/mock-data";

const Leaderboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Leaderboard</h1>
          <p className="text-muted-foreground">
            Compete with your peers and climb the ranks with your achievements!
          </p>
        </div>
      </div>
      
      <LeaderboardTable students={leaderboardData} currentUserId="u1" />
      
      <div className="rounded-lg bg-primary/5 border border-primary/20 p-6 text-center">
        <h3 className="text-lg font-medium text-primary mb-2">How Rankings Work</h3>
        <p className="text-sm text-muted-foreground">
          Rankings are calculated based on the total weightage points accumulated from your verified certificates. 
          Certificates are assigned different weightage based on their domain, type, and prominence. 
          The system updates rankings every 24 hours.
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
