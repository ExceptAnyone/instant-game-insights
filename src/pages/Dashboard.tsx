
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/ui/navbar";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PerformanceCharts from "@/components/dashboard/PerformanceCharts";
import MistakesAnalysis from "@/components/dashboard/MistakesAnalysis";
import RecentGames from "@/components/dashboard/RecentGames";
import ImprovementTips from "@/components/dashboard/ImprovementTips";

const Dashboard = () => {
  const navigate = useNavigate();

  // 특정 시나리오로 시뮬레이터 이동 함수
  const goToSimulatorWithContext = (scenario: string) => {
    navigate(`/simulator?scenario=${scenario}`);
  };

  // 리플레이 특정 시점으로 이동 함수
  const goToReplayMoment = (gameId: string, timestamp: number, context: string) => {
    navigate(`/simulator?replay=${gameId}&time=${timestamp}&context=${context}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto p-6">
        <DashboardHeader onSimulatorClick={goToSimulatorWithContext} />

        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="performance" className="text-white">성능 분석</TabsTrigger>
            <TabsTrigger value="mistakes" className="text-white">실수 분석</TabsTrigger>
            <TabsTrigger value="games" className="text-white">최근 게임</TabsTrigger>
            <TabsTrigger value="tips" className="text-white">개선 제안</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-6">
            <PerformanceCharts />
          </TabsContent>

          <TabsContent value="mistakes">
            <MistakesAnalysis />
          </TabsContent>

          <TabsContent value="games">
            <RecentGames onReplayClick={goToReplayMoment} />
          </TabsContent>

          <TabsContent value="tips">
            <ImprovementTips onSimulatorClick={goToSimulatorWithContext} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
