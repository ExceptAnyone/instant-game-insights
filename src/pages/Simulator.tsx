
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { 
  PlayIcon, 
  PauseIcon, 
  RotateCcwIcon, 
  AlertTriangleIcon,
  EyeIcon,
  TargetIcon,
  ShieldIcon,
  SwordsIcon
} from "lucide-react";

const Simulator = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentFeedback, setCurrentFeedback] = useState<any>(null);
  const [gameStats, setGameStats] = useState({
    kills: 3,
    deaths: 1,
    assists: 2,
    cs: 156,
    gold: 8420
  });

  // 시뮬레이션 피드백 데이터
  const feedbackEvents = [
    {
      time: 3,
      type: "warning",
      icon: EyeIcon,
      title: "시야 주의",
      message: "적 정글러가 근처에 있을 수 있습니다. 와드를 설치하세요!",
      color: "yellow"
    },
    {
      time: 8,
      type: "danger",
      icon: AlertTriangleIcon,
      title: "위험한 포지션",
      message: "너무 앞으로 나가고 있습니다. 안전한 위치로 후퇴하세요!",
      color: "red"
    },
    {
      time: 15,
      type: "tip",
      icon: SwordsIcon,
      title: "좋은 기회!",
      message: "상대가 스킬을 빼먹었습니다. 공격적으로 나가세요!",
      color: "green"
    },
    {
      time: 22,
      type: "warning",
      icon: TargetIcon,
      title: "CS 놓침",
      message: "미니언 막타를 놓치고 있습니다. 집중하세요!",
      color: "yellow"
    },
    {
      time: 28,
      type: "success",
      icon: ShieldIcon,
      title: "훌륭한 회피!",
      message: "스킬샷을 잘 피했습니다. 이제 반격하세요!",
      color: "blue"
    },
    {
      time: 35,
      type: "danger",
      icon: AlertTriangleIcon,
      title: "갱킹 위험",
      message: "적 2명이 접근 중입니다. 즉시 후퇴하세요!",
      color: "red"
    }
  ];

  // 시뮬레이션 타이머
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          
          // 해당 시간에 피드백이 있는지 확인
          const feedback = feedbackEvents.find(event => event.time === newTime);
          if (feedback) {
            setCurrentFeedback(feedback);
            // 3초 후 피드백 숨김
            setTimeout(() => setCurrentFeedback(null), 3000);
          }
          
          // 게임 스탯 업데이트 시뮬레이션
          if (newTime % 5 === 0) {
            setGameStats(prev => ({
              ...prev,
              cs: prev.cs + Math.floor(Math.random() * 3),
              gold: prev.gold + Math.floor(Math.random() * 200)
            }));
          }
          
          // 40초에서 리셋
          return newTime >= 40 ? 0 : newTime;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setCurrentFeedback(null);
    setGameStats({
      kills: 3,
      deaths: 1,
      assists: 2,
      cs: 156,
      gold: 8420
    });
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red':
        return 'border-red-500 bg-red-900/20 text-red-400';
      case 'yellow':
        return 'border-yellow-500 bg-yellow-900/20 text-yellow-400';
      case 'green':
        return 'border-green-500 bg-green-900/20 text-green-400';
      case 'blue':
        return 'border-blue-500 bg-blue-900/20 text-blue-400';
      default:
        return 'border-gray-500 bg-gray-900/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="container mx-auto">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">실시간 피드백 시뮬레이터</h1>
          <p className="text-gray-300">게임 중 AI 코치가 어떻게 피드백을 제공하는지 체험해보세요</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 게임 화면 시뮬레이션 */}
          <div className="lg:col-span-2 space-y-4">
            {/* 가상 게임 화면 */}
            <Card className="bg-slate-800/50 border-slate-700 relative overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-900/20 to-blue-900/20 relative">
                {/* 가상 게임 UI */}
                <div className="absolute top-4 left-4 flex gap-4">
                  <Badge className="bg-blue-600">LV 8</Badge>
                  <Badge className="bg-purple-600">야스오</Badge>
                </div>
                
                <div className="absolute top-4 right-4 text-white text-sm">
                  게임 시간: {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}
                </div>
                
                <div className="absolute bottom-4 left-4 flex gap-4 text-white text-sm">
                  <span>KDA: {gameStats.kills}/{gameStats.deaths}/{gameStats.assists}</span>
                  <span>CS: {gameStats.cs}</span>
                  <span>골드: {gameStats.gold}</span>
                </div>

                {/* 실시간 피드백 오버레이 */}
                {currentFeedback && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
                    <Alert className={`${getColorClasses(currentFeedback.color)} border-2 min-w-80`}>
                      <currentFeedback.icon className="h-4 w-4" />
                      <AlertDescription>
                        <div className="font-semibold">{currentFeedback.title}</div>
                        <div className="text-sm mt-1">{currentFeedback.message}</div>
                      </AlertDescription>
                    </Alert>
                  </div>
                )}

                {/* 플레이 버튼 오버레이 */}
                {!isPlaying && currentTime === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Button
                      size="lg"
                      onClick={handlePlayPause}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <PlayIcon className="w-6 h-6 mr-2" />
                      시뮬레이션 시작
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            {/* 컨트롤 패널 */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={handlePlayPause}
                      variant="outline"
                      size="sm"
                      className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
                    >
                      {isPlaying ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4" />}
                    </Button>
                    
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      size="sm"
                      className="border-gray-500 text-gray-300 hover:bg-gray-500/10"
                    >
                      <RotateCcwIcon className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex-1 mx-6">
                    <Progress value={(currentTime / 40) * 100} className="h-2" />
                  </div>
                  
                  <span className="text-sm text-gray-400">
                    {currentTime}/40초
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 사이드 패널 */}
          <div className="space-y-4">
            {/* 피드백 목록 */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-lg">예정된 피드백</CardTitle>
                <CardDescription>시뮬레이션 중 나타날 AI 조언들</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {feedbackEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      currentTime >= event.time 
                        ? 'bg-gray-700/50 border-gray-600 opacity-50'
                        : 'bg-slate-700/50 border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <event.icon className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-white">{event.time}초</span>
                      <Badge 
                        className={`text-xs ${
                          event.color === 'red' ? 'bg-red-600' :
                          event.color === 'yellow' ? 'bg-yellow-600' :
                          event.color === 'green' ? 'bg-green-600' :
                          'bg-blue-600'
                        }`}
                      >
                        {event.title}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-300">{event.message}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* 설명 */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-lg">시뮬레이터 안내</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 space-y-2">
                <p>• 실제 게임 중 나타나는 AI 피드백을 미리 체험</p>
                <p>• 위험 상황, 기회 포착, 실수 방지 등 다양한 조언</p>
                <p>• 피드백은 3초간 표시된 후 자동으로 사라집니다</p>
                <p>• 40초 시뮬레이션 후 자동 재시작</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
