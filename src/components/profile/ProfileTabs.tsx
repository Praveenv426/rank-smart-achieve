
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { WeightageBreakdown } from "@/types";
import { WeightageDonutChart } from "../dashboard/WeightageDonutChart";
import { RankProgressChart } from "../dashboard/RankProgressChart";

interface ProfileTabsProps {
  weightageData: WeightageBreakdown;
  rankProgressData: Array<{ month: string; rank: number }>;
}

export function ProfileTabs({ weightageData, rankProgressData }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="mb-6">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="certificates">Certificates</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Profile Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-medium">Alex Johnson</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">alex.johnson@university.edu</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Department</p>
                    <p className="font-medium">Computer Science</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Course</p>
                    <p className="font-medium">Bachelor of Science</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Weightage Summary</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Total Weightage</p>
                    <p className="text-xl font-semibold">{weightageData.total}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Verified Certificates</p>
                    <p className="text-xl font-semibold">3</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Pending Verification</p>
                    <p className="text-xl font-semibold">1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <WeightageDonutChart data={weightageData} type="category" />
          </div>
          
          <RankProgressChart data={rankProgressData} />
        </div>
      </TabsContent>
      
      <TabsContent value="certificates">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">Certificate Management</h3>
            <p className="text-muted-foreground">
              View and manage all your certificates here. This section will show all your
              uploaded certificates, their verification status, and other details.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="settings">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">Account Settings</h3>
            <p className="text-muted-foreground">
              Manage your account settings, preferences, and security options here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
