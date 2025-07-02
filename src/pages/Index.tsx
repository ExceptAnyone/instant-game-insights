
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GamepadIcon, TrendingUpIcon, ClockIcon, DollarSignIcon, BrainIcon, TargetIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            🎮 AI 기반 게임 코칭
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI 코치
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            실시간으로 당신의 게임 플레이를 분석하고<br />
            <span className="text-purple-400 font-semibold">AI가 코치처럼 즉각 피드백</span>을 제공합니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/dashboard">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                🚀 지금 시작하기
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-3 text-lg">
              📹 데모 보기
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
            <span>✅ 실시간 분석</span>
            <span>✅ 개인화된 피드백</span>
            <span>✅ 무료 체험</span>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              왜 <span className="text-purple-400">AI 코치</span>가 필요할까요?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              같은 실수를 반복하며 답답함을 느끼고 계신가요?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-red-900/20 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2">
                  😤 기존의 문제점
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p>• 비슷한 실수를 계속 반복</p>
                <p>• 유튜브 코칭은 비싸고 시간이 오래 걸림</p>
                <p>• 내가 뭘 잘못했는지 모르겠음</p>
                <p>• 일대일 피드백 받기 어려움</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-900/20 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  ✨ AI 코치의 해결책
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-3">
                <p>• 실시간으로 즉각적인 피드백</p>
                <p>• 저렴한 비용으로 지속적인 코칭</p>
                <p>• 개인화된 맞춤 분석 제공</p>
                <p>• 반복 실수 패턴 자동 감지</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              핵심 기능
            </h2>
            <p className="text-gray-300 text-lg">
              게임 실력 향상을 위한 모든 것이 준비되어 있습니다
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <ClockIcon className="w-10 h-10 text-purple-400 mb-2" />
                <CardTitle className="text-white">실시간 피드백</CardTitle>
                <CardDescription className="text-gray-400">
                  게임 중 3초 이내에 즉각적인 조언을 받아보세요
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <BrainIcon className="w-10 h-10 text-blue-400 mb-2" />
                <CardTitle className="text-white">AI 학습 분석</CardTitle>
                <CardDescription className="text-gray-400">
                  당신만의 플레이 패턴을 학습해 맞춤형 코칭 제공
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <TargetIcon className="w-10 h-10 text-green-400 mb-2" />
                <CardTitle className="text-white">반복 실수 감지</CardTitle>
                <CardDescription className="text-gray-400">
                  자주 하는 실수를 자동으로 감지하고 개선점 제안
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <TrendingUpIcon className="w-10 h-10 text-yellow-400 mb-2" />
                <CardTitle className="text-white">성장 트래킹</CardTitle>
                <CardDescription className="text-gray-400">
                  실력 향상 과정을 그래프로 시각화해서 확인
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <GamepadIcon className="w-10 h-10 text-red-400 mb-2" />
                <CardTitle className="text-white">멀티 게임 지원</CardTitle>
                <CardDescription className="text-gray-400">
                  롤, 발로란트, 오버워치 등 다양한 게임 지원
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <DollarSignIcon className="w-10 h-10 text-purple-400 mb-2" />
                <CardTitle className="text-white">합리적 가격</CardTitle>
                <CardDescription className="text-gray-400">
                  기존 코칭 서비스 대비 1/10 가격으로 이용 가능
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* User Story */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                사용자 스토리
              </h2>
              <p className="text-gray-300 text-lg">
                박준혁(24세, 대학생)의 실제 사용 경험
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">문제 인식</h3>
                  <p className="text-gray-300">롤을 하면서 자주 비슷한 실수를 반복해 실력이 늘지 않아 고민</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">앱 설치 & 연동</h3>
                  <p className="text-gray-300">"AI 코치" 앱 설치 후 롤 클라이언트와 자동 연동</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">실시간 분석</h3>
                  <p className="text-gray-300">게임 중 위치 선정이 나쁘면 "라인전에서 너무 앞으로 나가고 있어요" 알림</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">게임 후 리포트</h3>
                  <p className="text-gray-300">"데스의 70%는 시야 밖에서 일어났습니다" 같은 상세 분석 제공</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-green-900/30 rounded-lg border border-green-500/30">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                <div>
                  <h3 className="text-green-400 font-semibold mb-2">결과</h3>
                  <p className="text-gray-300">피드백을 반영해 다음 경기에서 더 나은 움직임으로 실력 향상 달성!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 바로 시작하세요!
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            AI 코치와 함께 게임 실력을 한 단계 업그레이드하고<br />
            반복되는 실수에서 벗어나보세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/dashboard">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-xl">
                🎮 무료로 시작하기
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-12 py-4 text-xl">
              더 알아보기
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-6 text-sm text-gray-400">
            <span>💳 신용카드 불필요</span>
            <span>⏱ 30초면 시작</span>
            <span>🔒 안전한 서비스</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">AI 코치</h3>
          <p className="text-gray-400 mb-6">실시간 AI 게임 코칭 서비스</p>
          
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-purple-400 transition-colors">서비스 소개</a>
            <a href="#" className="hover:text-purple-400 transition-colors">이용약관</a>
            <a href="#" className="hover:text-purple-400 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-purple-400 transition-colors">문의하기</a>
          </div>
          
          <p className="text-gray-600 text-xs mt-6">
            © 2024 AI 코치. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
