
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RankingSummary, RankProgress } from "@/types";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

interface RankCardProps {
  data: RankingSummary;
}

export function RankCard({ data }: RankCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">Current Ranking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center py-4">
          <div className="relative">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border-8 border-muted bg-background">
              <div className="text-center">
                <span className="text-4xl font-bold">{data.currentRank}</span>
                <span className="text-sm text-muted-foreground">
                  /{data.totalStudents}
                </span>
                <div className="mt-1 flex items-center justify-center">
                  {data.rankProgress === RankProgress.UP ? (
                    <ArrowUp className="mr-1 h-4 w-4 text-success" />
                  ) : data.rankProgress === RankProgress.DOWN ? (
                    <ArrowDown className="mr-1 h-4 w-4 text-destructive" />
                  ) : (
                    <Minus className="mr-1 h-4 w-4 text-muted-foreground" />
                  )}
                  <span
                    className={
                      data.rankProgress === RankProgress.UP
                        ? "text-success"
                        : data.rankProgress === RankProgress.DOWN
                        ? "text-destructive"
                        : "text-muted-foreground"
                    }
                  >
                    {data.rankProgress === RankProgress.UP
                      ? "Improving"
                      : data.rankProgress === RankProgress.DOWN
                      ? "Declining"
                      : "Stable"}
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="text-xs">Top</span>
              <span className="text-lg font-bold">
                {Math.round((data.currentRank / data.totalStudents) * 100)}%
              </span>
            </div>
          </div>
        </div>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Ranking in {data.rankCategory}
        </p>
      </CardContent>
    </Card>
  );
}
