
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";

interface ImprovementTipsProps {
  onSimulatorClick: (scenario: string) => void;
}

const ImprovementTips = ({ onSimulatorClick }: ImprovementTipsProps) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">AI 개선 제안</CardTitle>
        <CardDescription className="text-gray-400">
          당신의 플레이 패턴을 분석한 맞춤형 조언
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-slate-700/50 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <Badge className="bg-red-600">높음 우선순위</Badge>
              <span className="text-sm text-gray-400">시야 관리</span>
            </div>
            <p className="text-white mb-3">라인전에서 상대 정글러 위치를 더 자주 확인하세요</p>
            <Button 
              size="sm" 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => onSimulatorClick('jungle_tracking')}
            >
              <PlayIcon className="w-4 h-4 mr-2" />
              시뮬레이터에서 연습하기
            </Button>
          </div>

          <div className="p-4 bg-slate-700/50 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <Badge className="bg-yellow-600">중간 우선순위</Badge>
              <span className="text-sm text-gray-400">스킬 사용</span>
            </div>
            <p className="text-white mb-3">스킬 콤보 연습을 통해 딜량을 더 늘려보세요</p>
            <Button 
              size="sm" 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => onSimulatorClick('skill_combo')}
            >
              <PlayIcon className="w-4 h-4 mr-2" />
              시뮬레이터에서 연습하기
            </Button>
          </div>

          <div className="p-4 bg-slate-700/50 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <Badge className="bg-green-600">낮음 우선순위</Badge>
              <span className="text-sm text-gray-400">템 빌드</span>
            </div>
            <p className="text-white">상황에 맞는 아이템 빌드를 연구해보세요</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImprovementTips;
