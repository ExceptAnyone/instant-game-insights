
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  GamepadIcon, 
  BarChart3Icon, 
  PlayIcon, 
  HomeIcon 
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <GamepadIcon className="w-8 h-8 text-purple-400" />
            AI Coach
          </Link>

          {/* 네비게이션 메뉴 */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button
                variant={isActive('/') ? "default" : "ghost"}
                size="sm"
                className={`text-white ${
                  isActive('/') 
                    ? 'bg-purple-600 hover:bg-purple-700' 
                    : 'hover:bg-slate-700'
                }`}
              >
                <HomeIcon className="w-4 h-4 mr-2" />
                홈
              </Button>
            </Link>
            
            <Link to="/dashboard">
              <Button
                variant={isActive('/dashboard') ? "default" : "ghost"}
                size="sm"
                className={`text-white ${
                  isActive('/dashboard') 
                    ? 'bg-purple-600 hover:bg-purple-700' 
                    : 'hover:bg-slate-700'
                }`}
              >
                <BarChart3Icon className="w-4 h-4 mr-2" />
                대시보드
              </Button>
            </Link>
            
            <Link to="/simulator">
              <Button
                variant={isActive('/simulator') ? "default" : "ghost"}
                size="sm"
                className={`text-white ${
                  isActive('/simulator') 
                    ? 'bg-purple-600 hover:bg-purple-700' 
                    : 'hover:bg-slate-700'
                }`}
              >
                <PlayIcon className="w-4 h-4 mr-2" />
                시뮬레이터
              </Button>
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
