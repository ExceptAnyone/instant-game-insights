
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid
} from "recharts";

const PerformanceCharts = () => {
  const performanceData = [
    { date: "1주차", score: 1200, kda: 1.2, winRate: 45 },
    { date: "2주차", score: 1350, kda: 1.5, winRate: 52 },
    { date: "3주차", score: 1280, kda: 1.3, winRate: 48 },
    { date: "4주차", score: 1480, kda: 1.8, winRate: 58 },
    { date: "5주차", score: 1520, kda: 1.9, winRate: 62 },
  ];

  const chartConfig = {
    score: { label: "점수", color: "#8b5cf6" },
    kda: { label: "KDA", color: "#06b6d4" },
    winRate: { label: "승률", color: "#10b981" },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">주간 성과 추이</CardTitle>
          <CardDescription className="text-gray-400">
            점수, KDA, 승률의 변화를 추적합니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ fill: "#8b5cf6" }}
              />
              <Line 
                type="monotone" 
                dataKey="kda" 
                stroke="#06b6d4" 
                strokeWidth={2}
                dot={{ fill: "#06b6d4" }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">승률 변화</CardTitle>
          <CardDescription className="text-gray-400">
            주간별 승률 개선 상황
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <AreaChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area 
                type="monotone" 
                dataKey="winRate" 
                stroke="#10b981" 
                fill="#10b981" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceCharts;
