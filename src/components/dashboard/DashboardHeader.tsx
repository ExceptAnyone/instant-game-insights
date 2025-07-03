
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GamepadIcon,
  AwardIcon,
  TrendingUpIcon,
  StarIcon,
  PlayIcon,
  ClockIcon
} from "lucide-react";

interface DashboardHeaderProps {
  onSimulatorClick: (scenario: string) => void;
}

const DashboardHeader = ({ onSimulatorClick }: DashboardHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-2">
            <GamepadIcon className="w-8 h-8 text-purple-400" />
            게임 분석 대시보드
          </h1>
          <p className="text-gray-300 mt-2">박준혁님의 최근 5주간 성과 분석</p>
        </div>
        <div className="flex gap-3">
          <Button 
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => onSimulatorClick('general')}
          >
            <PlayIcon className="w-4 h-4 mr-2" />
            실시간 피드백 체험
          </Button>
          <Button className="bg-slate-700 hover:bg-slate-600">
            새 분석 시작
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-sm font-medium">현재 랭크</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <AwardIcon className="w-5 h-5 text-yellow-400" />
              <span className="text-2xl font-bold text-white">골드 1</span>
            </div>
            <p className="text-sm text-green-400 mt-1">+2 티어 상승</p>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-sm font-medium">총 게임 수</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <GamepadIcon className="w-5 h-5 text-blue-400" />
              <span className="text-2xl font-bold text-white">127</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">이번 시즌</p>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-sm font-medium">승률</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <TrendingUpIcon className="w-5 h-5 text-green-400" />
              <span className="text-2xl font-bold text-white">62%</span>
            </div>
            <p className="text-sm text-green-400 mt-1">+8% 개선</p>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-sm font-medium">평균 KDA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-purple-400" />
              <span className="text-2xl font-bold text-white">1.9</span>
            </div>
            <p className="text-sm text-purple-400 mt-1">최고 기록!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHeader;
