import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/ui/navbar";
import { Link } from "react-router-dom";
import { 
  TrendingUpIcon, 
  EyeIcon, 
  TargetIcon, 
  BrainIcon,
  GamepadIcon,
  BarChart3Icon,
  PlayIcon,
  StarIcon,
  ShieldIcon,
  SwordsIcon
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        {/* 히어로 섹션 */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-600/20 rounded-full">
              <BrainIcon className="w-16 h-16 text-purple-400" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI 게임 코치
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            인공지능이 당신의 게임 플레이를 실시간으로 분석하고, 
            개인 맞춤형 피드백을 제공하여 더 나은 플레이어가 될 수 있도록 도와드립니다.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <BarChart3Icon className="w-5 h-5 mr-2" />
                분석 시작하기
              </Button>
            </Link>
            <Link to="/simulator">
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10">
                <PlayIcon className="w-5 h-5 mr-2" />
                시뮬레이터 체험
              </Button>
            </Link>
          </div>
        </div>

        {/* 기능 섹션 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* 실시간 피드백 */}
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex items-center gap-4 mb-4">
              <EyeIcon className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">실시간 피드백</h2>
            </div>
            <p className="text-gray-300 mb-4">
              게임 중 발생하는 상황에 대한 즉각적인 피드백을 통해 실력 향상을 도와드립니다.
            </p>
            <Badge className="bg-blue-600">정확도 98%</Badge>
          </Card>

          {/* 맞춤형 분석 */}
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex items-center gap-4 mb-4">
              <TargetIcon className="w-8 h-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">맞춤형 분석</h2>
            </div>
            <p className="text-gray-300 mb-4">
              개인의 플레이 스타일을 분석하여 약점을 보완하고 강점을 강화할 수 있도록 맞춤형 정보를 제공합니다.
            </p>
            <Badge className="bg-green-600">AI 분석</Badge>
          </Card>

          {/* 시뮬레이터 */}
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex items-center gap-4 mb-4">
              <GamepadIcon className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">시뮬레이터</h2>
            </div>
            <p className="text-gray-300 mb-4">
              다양한 게임 상황을 시뮬레이션하여 실제 게임과 유사한 환경에서 연습할 수 있습니다.
            </p>
            <Badge className="bg-purple-600">실전 대비</Badge>
          </Card>
        </section>

        {/* 작동 방식 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">작동 방식</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1단계 */}
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-gray-600 text-white mr-2">1</Badge>
                <h3 className="text-xl font-bold text-white">데이터 수집</h3>
              </div>
              <p className="text-gray-300">
                게임 플레이 데이터를 수집하여 AI 모델이 분석할 수 있도록 준비합니다.
              </p>
            </Card>

            {/* 2단계 */}
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-gray-600 text-white mr-2">2</Badge>
                <h3 className="text-xl font-bold text-white">AI 분석</h3>
              </div>
              <p className="text-gray-300">
                AI 모델이 수집된 데이터를 분석하여 게임 플레이의 강점과 약점을 파악합니다.
              </p>
            </Card>

            {/* 3단계 */}
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-gray-600 text-white mr-2">3</Badge>
                <h3 className="text-xl font-bold text-white">피드백 제공</h3>
              </div>
              <p className="text-gray-300">
                분석 결과를 바탕으로 개인 맞춤형 피드백을 제공하여 실력 향상을 위한 가이드라인을 제시합니다.
              </p>
            </Card>

            {/* 4단계 */}
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-gray-600 text-white mr-2">4</Badge>
                <h3 className="text-xl font-bold text-white">실력 향상</h3>
              </div>
              <p className="text-gray-300">
                피드백을 바탕으로 꾸준히 연습하고 실력을 향상시켜 더 나은 플레이어가 될 수 있습니다.
              </p>
            </Card>
          </div>
        </section>

        {/* 통계 섹션 */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">AI 코칭으로 향상된 통계</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 승률 */}
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <TrendingUpIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white">68%</div>
              <p className="text-gray-300">평균 승률</p>
            </Card>

            {/* KDA */}
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <StarIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white">2.5</div>
              <p className="text-gray-300">평균 KDA</p>
            </Card>

            {/* 생존율 */}
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <ShieldIcon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white">75%</div>
              <p className="text-gray-300">평균 생존율</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
