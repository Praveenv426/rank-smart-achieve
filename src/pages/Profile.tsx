
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileTabs } from "@/components/profile/ProfileTabs";
import { currentUser, weightageBreakdown, rankProgressionData } from "@/lib/mock-data";

const Profile = () => {
  return (
    <div className="space-y-6">
      <ProfileHeader user={currentUser} />
      <ProfileTabs 
        weightageData={weightageBreakdown}
        rankProgressData={rankProgressionData}
      />
    </div>
  );
};

export default Profile;
