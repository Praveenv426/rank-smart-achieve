
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { WeightageBreakdown } from "@/types";

interface WeightageDonutChartProps {
  data: WeightageBreakdown;
  type: "category" | "domain";
}

export function WeightageDonutChart({ data, type }: WeightageDonutChartProps) {
  const chartData = type === "category" ? data.byCategory : data.byDomain;
  
  const COLORS = [
    "#3B82F6", // primary blue
    "#10B981", // success green
    "#F59E0B", // warning yellow
    "#8B5CF6", // purple
    "#EC4899", // pink
    "#14B8A6", // teal
    "#F97316", // orange
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">
          Weightage by {type === "category" ? "Category" : "Domain"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={45}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                nameKey={type === "category" ? "category" : "domain"}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value} points`, type === "category" ? "Category" : "Domain"]}
                labelFormatter={(label) => label}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2">
          <ul className="space-y-1">
            {chartData.map((item, index) => (
              <li key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <span
                    className="mr-2 h-3 w-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>
                  <span>{type === "category" ? item.category : item.domain}</span>
                </div>
                <span className="font-medium">{item.value} pts</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
