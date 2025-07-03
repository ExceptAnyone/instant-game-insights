
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ClockIcon,
  EyeIcon,
  AlertTriangleIcon,
  PlayIcon
} from "lucide-react";

interface RecentGamesProps {
  onReplayClick: (gameId: string, timestamp: number, context: string) => void;
}

const RecentGames = ({ onReplayClick }: RecentGamesProps) => {
  const recentGames = [
    { 
      id: 1, 
      result: "승", 
      champion: "야스오", 
      kda: "12/3/8", 
      duration: "28분", 
      rank: "골드 2",
      mistakes: [
        { type: "포지셔닝", timestamp: 480, description: "8분에 너무 앞으로 나가서 갱킹 당함" },
        { type: "시야 관리", timestamp: 720, description: "12분에 와드 없이 강 건너편 진입" }
      ]
    },
    { 
      id: 2, 
      result: "패", 
      champion: "아리", 
      kda: "8/7/12", 
      duration: "35분", 
      rank: "골드 2",
      mistakes: [
        { type: "스킬 사용", timestamp: 300, description: "5분에 궁극기를 잘못된 타이밍에 사용" },
        { type: "포지셔닝", timestamp: 1200, description: "20분 한타에서 위험한 위치에 있었음" }
      ]
    },
    { 
      id: 3, 
      result: "승", 
      champion: "야스오", 
      kda: "15/2/6", 
      duration: "24분", 
      rank: "골드 1",
      mistakes: [
        { type: "CS", timestamp: 180, description: "3분에 미니언 막타 놓침이 많았음" }
      ]
    },
    { 
      id: 4, 
      result: "승", 
      champion: "제드", 
      kda: "11/4/9", 
      duration: "31분", 
      rank: "골드 1",
      mistakes: [
        { type: "시야 관리", timestamp: 600, description: "10분에 미니맵을 자주 확인하지 않음" },
        { type: "포지셔닝", timestamp: 900, description: "15분에 안전하지 않은 위치에서 파밍" }
      ]
    }
  ];

  const getMistakeColor = (type: string) => {
    switch (type) {
      case "포지셔닝": return "bg-red-600";
      case "시야 관리": return "bg-orange-600";
      case "스킬 사용": return "bg-yellow-600";
      case "CS": return "bg-blue-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">최근 게임 기록 및 실수 분석</CardTitle>
        <CardDescription className="text-gray-400">
          최근 4경기 상세 결과 및 발생한 실수들
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recentGames.map((game) => (
            <div key={game.id} className="p-4 bg-slate-700/50 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Badge 
                    className={game.result === "승" ? "bg-green-600" : "bg-red-600"}
                  >
                    {game.result}
                  </Badge>
                  <div>
                    <p className="text-white font-medium">{game.champion}</p>
                    <p className="text-gray-400 text-sm">{game.kda}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">{game.rank}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <ClockIcon className="w-4 h-4" />
                    {game.duration}
                  </div>
                </div>
              </div>
              
              {/* 실수 목록 */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-300">발생한 실수들:</h4>
                {game.mistakes.map((mistake, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-slate-600/30 rounded text-sm">
                    <div className="flex items-center gap-2">
                      <AlertTriangleIcon className="w-4 h-4 text-orange-400" />
                      <Badge className={getMistakeColor(mistake.type)}>
                        {mistake.type}
                      </Badge>
                      <span className="text-gray-300">{mistake.description}</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
                      onClick={() => onReplayClick(game.id.toString(), mistake.timestamp, mistake.type)}
                    >
                      <EyeIcon className="w-3 h-3 mr-1" />
                      리플레이 보기
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentGames;
