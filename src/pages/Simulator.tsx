import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/ui/navbar";
import GameTimeline from "@/components/simulator/GameTimeline";
import AnalysisCharts from "@/components/simulator/AnalysisCharts";
import UserComparison from "@/components/simulator/UserComparison";
import { useSearchParams } from "react-router-dom";
import { 
  PlayIcon, 
  PauseIcon, 
  RotateCcwIcon, 
  AlertTriangleIcon,
  EyeIcon,
  TargetIcon,
  ShieldIcon,
  SwordsIcon,
  ArrowLeftIcon,
  VideoIcon,
  BarChart3Icon,
  UsersIcon
} from "lucide-react";

const Simulator = () => {
  const [searchParams] = useSearchParams();
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

  // URL 파라미터에서 시나리오나 리플레이 정보 가져오기
  const scenario = searchParams.get('scenario');
  const replayId = searchParams.get('replay');
  const replayTime = searchParams.get('time');
  const replayContext = searchParams.get('context');

  // 타임라인 이벤트 데이터
  const timelineEvents = [
    {
      time: 3,
      type: 'neutral' as const,
      title: '시야 부족 감지',
      description: '적 정글러 위치 파악 불가',
      impact: -15
    },
    {
      time: 8,
      type: 'bad' as const,
      title: '위험한 포지셔닝',
      description: '너무 앞으로 나가서 갱킹에 취약',
      impact: -35
    },
    {
      time: 15,
      type: 'good' as const,
      title: '좋은 트레이드',
      description: '상대 스킬 회피 후 성공적인 맞교환',
      impact: 45
    },
    {
      time: 22,
      type: 'bad' as const,
      title: 'CS 놓침',
      description: '연속 미니언 막타 실패',
      impact: -20
    },
    {
      time: 28,
      type: 'good' as const,
      title: '스킬샷 회피',
      description: '완벽한 무빙으로 스킬 회피',
      impact: 25
    },
    {
      time: 35,
      type: 'bad' as const,
      title: '갱킹 당함',
      description: '미니맵 미확인으로 갱킹 당함',
      impact: -60
    }
  ];

  // 분석 데이터
  const analysisData = [
    { time: 0, performance: 65, goldLead: 0, cs: 100, vision: 60, positioning: 70 },
    { time: 5, performance: 62, goldLead: -50, cs: 98, vision: 45, positioning: 65 },
    { time: 10, performance: 58, goldLead: -80, cs: 95, vision: 40, positioning: 55 },
    { time: 15, performance: 71, goldLead: 20, cs: 102, vision: 50, positioning: 75 },
    { time: 20, performance: 68, goldLead: 10, cs: 98, vision: 48, positioning: 72 },
    { time: 25, performance: 74, goldLead: 35, cs: 105, vision: 55, positioning: 80 },
    { time: 30, performance: 76, goldLead: 50, cs: 108, vision: 60, positioning: 82 },
    { time: 35, performance: 52, goldLead: -100, cs: 95, vision: 35, positioning: 45 },
    { time: 40, performance: 48, goldLead: -150, cs: 90, vision: 30, positioning: 40 }
  ];

  // 시나리오별 피드백 데이터
  const getScenarioFeedback = () => {
    if (replayContext === 'nocturne_gank') {
      return [
        {
          time: 5,
          type: "warning",
          icon: EyeIcon,
          title: "녹턴 감지됨",
          message: "미니맵에서 녹턴이 하단으로 이동 중입니다. 주의하세요!",
          color: "yellow"
        },
        {
          time: 12,
          type: "danger",
          icon: AlertTriangleIcon,
          title: "갱킹 위험!",
          message: "녹턴이 접근하고 있습니다. 즉시 후퇴하세요!",
          color: "red"
        },
        {
          time: 18,
          type: "critical",
          icon: AlertTriangleIcon,
          title: "실제 상황 재현",
          message: "이 시점에서 실제로 갱킹을 당했습니다. 미니맵을 더 자주 확인했다면 피할 수 있었습니다.",
          color: "red"
        }
      ];
    }
    
    // 기본 시뮬레이션 피드백
    return [
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
  };

  const feedbackEvents = getScenarioFeedback();

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

  const handleTimelineClick = (time: number) => {
    setCurrentTime(time);
  };

  const handleUserSelect = (userId: string) => {
    console.log('사용자 선택:', userId);
    // 여기에 선택된 사용자의 플레이 분석 로직 추가
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

  // 컨텍스트별 제목과 설명 설정
  const getContextInfo = () => {
    if (replayContext === 'nocturne_gank') {
      return {
        title: "리플레이 분석: 녹턴 갱킹 상황",
        description: `게임 ID: ${replayId} | 시점: ${replayTime}초 - 실제 게임에서 발생한 갱킹 상황을 재현합니다`
      };
    }
    
    if (scenario === 'vision_management') {
      return {
        title: "시야 관리 연습 모드",
        description: "시야 관리 스킬을 향상시키기 위한 맞춤형 시뮬레이션"
      };
    }
    
    return {
      title: "AI 게임 분석 시뮬레이터",
      description: "실제 게임 영상과 함께 상세한 분석을 제공합니다"
    };
  };

  const contextInfo = getContextInfo();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto p-6">
        {/* 헤더 */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            {(replayId || scenario) && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.history.back()}
                className="border-gray-500 text-gray-300 hover:bg-gray-500/10"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                돌아가기
              </Button>
            )}
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{contextInfo.title}</h1>
              <p className="text-gray-300">{contextInfo.description}</p>
            </div>
          </div>

          {replayContext && (
            <Alert className="mb-6 border-blue-500 bg-blue-900/20 text-blue-400">
              <AlertTriangleIcon className="h-4 w-4" />
              <AlertDescription>
                <strong>실제 게임 분석:</strong> 이 시뮬레이션은 당신의 실제 게임 데이터를 기반으로 만들어졌습니다.
                동일한 상황에서 어떻게 대처해야 하는지 학습해보세요.
              </AlertDescription>
            </Alert>
          )}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* 메인 게임 화면 */}
          <div className="xl:col-span-2 space-y-4">
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

          {/* 분석 패널 */}
          <div className="xl:col-span-2">
            <Tabs defaultValue="timeline" className="h-full">
              <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
                <TabsTrigger value="timeline" className="text-white">
                  <VideoIcon className="w-4 h-4 mr-1" />
                  타임라인
                </TabsTrigger>
                <TabsTrigger value="analysis" className="text-white">
                  <BarChart3Icon className="w-4 h-4 mr-1" />
                  분석
                </TabsTrigger>
                <TabsTrigger value="comparison" className="text-white">
                  <UsersIcon className="w-4 h-4 mr-1" />
                  비교
                </TabsTrigger>
              </TabsList>

              <TabsContent value="timeline" className="mt-4">
                <GameTimeline
                  events={timelineEvents}
                  currentTime={currentTime}
                  onTimelineClick={handleTimelineClick}
                  totalDuration={40}
                />
              </TabsContent>

              <TabsContent value="analysis" className="mt-4">
                <AnalysisCharts
                  data={analysisData}
                  currentTime={currentTime}
                />
              </TabsContent>

              <TabsContent value="comparison" className="mt-4">
                <UserComparison
                  currentTime={currentTime}
                  onUserSelect={handleUserSelect}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
