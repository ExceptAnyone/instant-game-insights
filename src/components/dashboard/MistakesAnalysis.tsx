
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  AlertTriangleIcon,
  TargetIcon
} from "lucide-react";

const MistakesAnalysis = () => {
  const mistakeData = [
    { category: "포지셔닝", count: 23, color: "#ef4444" },
    { category: "시야 관리", count: 18, color: "#f97316" },
    { category: "스킬 사용", count: 15, color: "#eab308" },
    { category: "템 빌드", count: 8, color: "#22c55e" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">실수 유형별 분포</CardTitle>
          <CardDescription className="text-gray-400">
            가장 자주 하는 실수 유형을 확인하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mistakeData.map((mistake, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{mistake.category}</span>
                  <span className="text-gray-400">{mistake.count}회</span>
                </div>
                <Progress 
                  value={(mistake.count / 30) * 100} 
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">AI 분석 결과</CardTitle>
          <CardDescription className="text-gray-400">
            주요 개선 포인트
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangleIcon className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-semibold">주의 필요</span>
            </div>
            <p className="text-gray-300 text-sm">
              포지셔닝 실수가 가장 많습니다. 미니맵을 더 자주 확인하고 안전한 위치를 유지하세요.
            </p>
          </div>
          
          <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TargetIcon className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">개선 중</span>
            </div>
            <p className="text-gray-300 text-sm">
              시야 관리가 점차 좋아지고 있습니다. 이 페이스를 유지하세요!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MistakesAnalysis;
