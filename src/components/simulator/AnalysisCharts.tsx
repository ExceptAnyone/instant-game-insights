
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
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { TrendingUpIcon, TrendingDownIcon, BarChart3Icon } from "lucide-react";

interface AnalysisData {
  time: number;
  performance: number;
  goldLead: number;
  cs: number;
  vision: number;
  positioning: number;
}

interface AnalysisChartsProps {
  data: AnalysisData[];
  currentTime: number;
}

const AnalysisCharts = ({ data, currentTime }: AnalysisChartsProps) => {
  const chartConfig = {
    performance: { label: "전체 성과", color: "#8b5cf6" },
    goldLead: { label: "골드 우위", color: "#10b981" },
    cs: { label: "CS 효율", color: "#06b6d4" },
    vision: { label: "시야 점수", color: "#f59e0b" },
    positioning: { label: "포지셔닝", color: "#ef4444" },
  };

  // 현재 시간 기준으로 데이터 필터링
  const currentData = data.filter(d => d.time <= currentTime);
  const latestData = currentData[currentData.length - 1];

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    return score >= 50 ? TrendingUpIcon : TrendingDownIcon;
  };

  return (
    <div className="space-y-4">
      {/* 현재 점수 요약 */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <BarChart3Icon className="w-5 h-5" />
            실시간 분석 점수
          </CardTitle>
          <CardDescription>현재 게임 시점에서의 성과 분석</CardDescription>
        </CardHeader>
        <CardContent>
          {latestData && (
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${getScoreColor(latestData.performance)}`}>
                  {latestData.performance}
                </div>
                <div className="text-sm text-gray-400">전체 성과</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${getScoreColor(latestData.goldLead)}`}>
                  {latestData.goldLead > 0 ? '+' : ''}{latestData.goldLead}
                </div>
                <div className="text-sm text-gray-400">골드 우위</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${getScoreColor(latestData.cs)}`}>
                  {latestData.cs}
                </div>
                <div className="text-sm text-gray-400">CS 효율</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${getScoreColor(latestData.vision)}`}>
                  {latestData.vision}
                </div>
                <div className="text-sm text-gray-400">시야 점수</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${getScoreColor(latestData.positioning)}`}>
                  {latestData.positioning}
                </div>
                <div className="text-sm text-gray-400">포지셔닝</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 성과 추이 차트 */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">성과 추이 분석</CardTitle>
          <CardDescription>시간에 따른 각 지표별 변화</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <LineChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="time" 
                stroke="#9ca3af"
                tickFormatter={(value) => `${Math.floor(value / 60)}:${(value % 60).toString().padStart(2, '0')}`}
              />
              <YAxis stroke="#9ca3af" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="performance" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ fill: "#8b5cf6", r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="cs" 
                stroke="#06b6d4" 
                strokeWidth={2}
                dot={{ fill: "#06b6d4", r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="vision" 
                stroke="#f59e0b" 
                strokeWidth={2}
                dot={{ fill: "#f59e0b", r: 4 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* 포지셔닝 히트맵 */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">포지셔닝 분석</CardTitle>
          <CardDescription>위험도별 포지션 분포</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[200px]">
            <AreaChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="time" 
                stroke="#9ca3af"
                tickFormatter={(value) => `${Math.floor(value / 60)}:${(value % 60).toString().padStart(2, '0')}`}
              />
              <YAxis stroke="#9ca3af" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area 
                type="monotone" 
                dataKey="positioning" 
                stroke="#ef4444" 
                fill="#ef4444" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisCharts;
