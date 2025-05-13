
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RankProgressChartProps {
  data: Array<{ month: string; rank: number }>;
}

export function RankProgressChart({ data }: RankProgressChartProps) {
  const minRank = Math.min(...data.map((item) => item.rank));
  const maxRank = Math.max(...data.map((item) => item.rank));
  
  // Adjust domain to display the ranks correctly (lower rank number = better)
  const domain = [Math.max(maxRank, minRank + 10), Math.max(1, minRank - 5)];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">Rank Progression</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 20,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={domain} reversed />
              <Tooltip 
                formatter={(value) => [`Rank: ${value}`, ""]}
                labelFormatter={(label) => label}
              />
              <Line
                type="monotone"
                dataKey="rank"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Lower rank number indicates better performance
        </p>
      </CardContent>
    </Card>
  );
}
