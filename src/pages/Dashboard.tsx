
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  TrendingUpIcon, 
  TrendingDownIcon, 
  TargetIcon, 
  AlertTriangleIcon,
  GamepadIcon,
  ClockIcon,
  AwardIcon,
  StarIcon
} from "lucide-react";

const Dashboard = () => {
  // 샘플 데이터
  const performanceData = [
    { date: "1주차", score: 1200, kda: 1.2, winRate: 45 },
    { date: "2주차", score: 1350, kda: 1.5, winRate: 52 },
    { date: "3주차", score: 1280, kda: 1.3, winRate: 48 },
    { date: "4주차", score: 1480, kda: 1.8, winRate: 58 },
    { date: "5주차", score: 1520, kda: 1.9, winRate: 62 },
  ];

  const mistakeData = [
    { category: "포지셔닝", count: 23, color: "#ef4444" },
    { category: "시야 관리", count: 18, color: "#f97316" },
    { category: "스킬 사용", count: 15, color: "#eab308" },
    { category: "템 빌드", count: 8, color: "#22c55e" },
  ];

  const recentGames = [
    { id: 1, result: "승", champion: "야스오", kda: "12/3/8", duration: "28분", rank: "골드 2" },
    { id: 2, result: "패", champion: "아리", kda: "8/7/12", duration: "35분", rank: "골드 2" },
    { id: 3, result: "승", champion: "야스오", kda: "15/2/6", duration: "24분", rank: "골드 1" },
    { id: 4, result: "승", champion: "제드", kda: "11/4/9", duration: "31분", rank: "골드 1" },
  ];

  const improvementTips = [
    { priority: "높음", tip: "라인전에서 상대 정글러 위치를 더 자주 확인하세요", category: "시야 관리" },
    { priority: "중간", tip: "스킬 콤보 연습을 통해 딜량을 더 늘려보세요", category: "스킬 사용" },
    { priority: "낮음", tip: "상황에 맞는 아이템 빌드를 연구해보세요", category: "템 빌드" },
  ];

  const chartConfig = {
    score: { label: "점수", color: "#8b5cf6" },
    kda: { label: "KDA", color: "#06b6d4" },
    winRate: { label: "승률", color: "#10b981" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="container mx-auto">
        {/* 헤더 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-2">
                <GamepadIcon className="w-8 h-8 text-purple-400" />
                게임 분석 대시보드
              </h1>
              <p className="text-gray-300 mt-2">박준혁님의 최근 5주간 성과 분석</p>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              새 분석 시작
            </Button>
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

        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="performance" className="text-white">성능 분석</TabsTrigger>
            <TabsTrigger value="mistakes" className="text-white">실수 분석</TabsTrigger>
            <TabsTrigger value="games" className="text-white">최근 게임</TabsTrigger>
            <TabsTrigger value="tips" className="text-white">개선 제안</TabsTrigger>
          </TabsList>

          {/* 성능 분석 탭 */}
          <TabsContent value="performance" className="space-y-6">
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
          </TabsContent>

          {/* 실수 분석 탭 */}
          <TabsContent value="mistakes" className="space-y-6">
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
          </TabsContent>

          {/* 최근 게임 탭 */}
          <TabsContent value="games">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">최근 게임 기록</CardTitle>
                <CardDescription className="text-gray-400">
                  최근 4경기 상세 결과
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentGames.map((game) => (
                    <div key={game.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
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
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 개선 제안 탭 */}
          <TabsContent value="tips">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">AI 개선 제안</CardTitle>
                <CardDescription className="text-gray-400">
                  당신의 플레이 패턴을 분석한 맞춤형 조언
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {improvementTips.map((tip, index) => (
                    <div key={index} className="p-4 bg-slate-700/50 rounded-lg border-l-4 border-purple-500">
                      <div className="flex items-center justify-between mb-2">
                        <Badge 
                          className={
                            tip.priority === "높음" ? "bg-red-600" :
                            tip.priority === "중간" ? "bg-yellow-600" : "bg-green-600"
                          }
                        >
                          {tip.priority} 우선순위
                        </Badge>
                        <span className="text-sm text-gray-400">{tip.category}</span>
                      </div>
                      <p className="text-white">{tip.tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
