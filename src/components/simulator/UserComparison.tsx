
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  UsersIcon, 
  SearchIcon, 
  TrophyIcon, 
  EyeIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  StarIcon
} from "lucide-react";

interface ComparisonUser {
  id: string;
  username: string;
  rank: string;
  winRate: number;
  performance: {
    decision: number;
    positioning: number;
    vision: number;
    cs: number;
  };
  avatar?: string;
}

interface UserComparisonProps {
  currentTime: number;
  onUserSelect: (userId: string) => void;
}

const UserComparison = ({ currentTime, onUserSelect }: UserComparisonProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  // 예시 사용자 데이터
  const topUsers: ComparisonUser[] = [
    {
      id: '1',
      username: 'ProGamer2024',
      rank: '다이아몬드 2',
      winRate: 73,
      performance: { decision: 85, positioning: 92, vision: 78, cs: 88 },
      avatar: '/placeholder.svg'
    },
    {
      id: '2',
      username: 'LaneKing',
      rank: '플래티넘 1',
      winRate: 68,
      performance: { decision: 79, positioning: 85, vision: 82, cs: 91 },
      avatar: '/placeholder.svg'
    },
    {
      id: '3',
      username: 'VisionMaster',
      rank: '다이아몬드 1',
      winRate: 71,
      performance: { decision: 83, positioning: 76, vision: 95, cs: 84 },
      avatar: '/placeholder.svg'
    },
    {
      id: '4',
      username: 'TeamFighter',
      rank: '플래티넘 2',
      winRate: 65,
      performance: { decision: 88, positioning: 89, vision: 74, cs: 79 },
      avatar: '/placeholder.svg'
    }
  ];

  const currentUserPerformance = {
    decision: 62,
    positioning: 58,
    vision: 45,
    cs: 71
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getComparisonIcon = (userScore: number, currentScore: number) => {
    if (userScore > currentScore) return ArrowUpIcon;
    return ArrowDownIcon;
  };

  const getComparisonColor = (userScore: number, currentScore: number) => {
    if (userScore > currentScore) return 'text-green-400';
    return 'text-red-400';
  };

  const handleUserToggle = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className="space-y-4">
      {/* 사용자 검색 */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <SearchIcon className="w-5 h-5" />
            플레이어 검색
          </CardTitle>
          <CardDescription>다른 플레이어의 게임을 분석해보세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="게임 ID 또는 사용자명 입력..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-700 border-slate-600 text-white"
            />
            <Button className="bg-purple-600 hover:bg-purple-700">
              <SearchIcon className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 상위 플레이어 비교 */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <UsersIcon className="w-5 h-5" />
            상위 플레이어와 비교
          </CardTitle>
          <CardDescription>동일한 상황에서 상위 플레이어들은 어떻게 했을까요?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topUsers.map((user) => {
              const isSelected = selectedUsers.includes(user.id);
              
              return (
                <div
                  key={user.id}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    isSelected 
                      ? 'border-purple-500 bg-purple-900/20' 
                      : 'border-slate-600 bg-slate-700/50 hover:bg-slate-700'
                  }`}
                  onClick={() => handleUserToggle(user.id)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.username[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium">{user.username}</span>
                          {user.winRate >= 70 && <StarIcon className="w-4 h-4 text-yellow-400" />}
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-600 text-xs">{user.rank}</Badge>
                          <span className="text-green-400 text-xs">승률 {user.winRate}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          onUserSelect(user.id);
                        }}
                      >
                        <EyeIcon className="w-3 h-3 mr-1" />
                        분석하기
                      </Button>
                    </div>
                  </div>

                  {/* 성능 비교 */}
                  <div className="grid grid-cols-4 gap-3">
                    {Object.entries(user.performance).map(([key, score]) => {
                      const currentScore = currentUserPerformance[key as keyof typeof currentUserPerformance];
                      const ComparisonIcon = getComparisonIcon(score, currentScore);
                      const comparisonColor = getComparisonColor(score, currentScore);
                      const difference = score - currentScore;
                      
                      return (
                        <div key={key} className="text-center">
                          <div className={`text-lg font-bold ${getPerformanceColor(score)}`}>
                            {score}
                          </div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                          <div className={`flex items-center justify-center gap-1 text-xs ${comparisonColor}`}>
                            <ComparisonIcon className="w-3 h-3" />
                            {Math.abs(difference)}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {isSelected && (
                    <div className="mt-3 p-3 bg-slate-600/30 rounded-lg">
                      <p className="text-sm text-gray-300">
                        <strong className="text-purple-400">{user.username}</strong>은 이 상황에서 
                        <span className="text-green-400"> 안전한 위치로 후퇴</span>하여 
                        갱킹을 피했습니다. 미니맵을 자주 확인하는 습관이 있어 
                        <span className="text-blue-400"> 시야 점수가 {user.performance.vision}점</span>입니다.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 학습 요약 */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <TrophyIcon className="w-5 h-5" />
            학습 포인트
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-green-900/20 border border-green-500/50 rounded-lg">
              <div className="text-green-400 font-medium text-sm">상위 플레이어들의 공통점</div>
              <p className="text-gray-300 text-sm mt-1">
                미니맵을 3-5초마다 확인하여 높은 시야 점수를 유지합니다.
              </p>
            </div>
            <div className="p-3 bg-blue-900/20 border border-blue-500/50 rounded-lg">
              <div className="text-blue-400 font-medium text-sm">개선 제안</div>
              <p className="text-gray-300 text-sm mt-1">
                포지셔닝 점수를 향상시키기 위해 안전 거리를 더 넓게 유지해보세요.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserComparison;
