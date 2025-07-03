
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  PlayIcon, 
  AlertTriangleIcon, 
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon
} from "lucide-react";

interface TimelineEvent {
  time: number;
  type: 'good' | 'bad' | 'neutral';
  title: string;
  description: string;
  impact: number; // -100 to 100
}

interface GameTimelineProps {
  events: TimelineEvent[];
  currentTime: number;
  onTimelineClick: (time: number) => void;
  totalDuration: number;
}

const GameTimeline = ({ events, currentTime, onTimelineClick, totalDuration }: GameTimelineProps) => {
  const getEventColor = (type: string) => {
    switch (type) {
      case 'good': return 'bg-green-500';
      case 'bad': return 'bg-red-500';
      default: return 'bg-yellow-500';
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'good': return CheckCircleIcon;
      case 'bad': return XCircleIcon;
      default: return AlertTriangleIcon;
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white text-lg flex items-center gap-2">
          <ClockIcon className="w-5 h-5" />
          게임 타임라인 분석
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* 타임라인 바 */}
        <div className="relative h-4 bg-slate-700 rounded-lg mb-6 overflow-hidden">
          {/* 현재 진행 표시 */}
          <div 
            className="absolute top-0 left-0 h-full bg-purple-600 transition-all duration-300"
            style={{ width: `${(currentTime / totalDuration) * 100}%` }}
          />
          
          {/* 이벤트 마커들 */}
          {events.map((event, index) => (
            <button
              key={index}
              className={`absolute top-0 w-1 h-full ${getEventColor(event.type)} hover:w-2 transition-all cursor-pointer`}
              style={{ left: `${(event.time / totalDuration) * 100}%` }}
              onClick={() => onTimelineClick(event.time)}
              title={`${event.time}초: ${event.title}`}
            />
          ))}
        </div>

        {/* 이벤트 목록 */}
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {events.map((event, index) => {
            const EventIcon = getEventIcon(event.type);
            const isHighlighted = Math.abs(currentTime - event.time) < 5;
            
            return (
              <div
                key={index}
                className={`p-3 rounded-lg border transition-all cursor-pointer ${
                  isHighlighted 
                    ? 'border-purple-500 bg-purple-900/20' 
                    : 'border-slate-600 bg-slate-700/50 hover:bg-slate-700'
                }`}
                onClick={() => onTimelineClick(event.time)}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <EventIcon className={`w-5 h-5 mt-0.5 ${
                      event.type === 'good' ? 'text-green-400' :
                      event.type === 'bad' ? 'text-red-400' : 'text-yellow-400'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-medium">{event.title}</span>
                        <Badge className={`text-xs ${
                          event.type === 'good' ? 'bg-green-600' :
                          event.type === 'bad' ? 'bg-red-600' : 'bg-yellow-600'
                        }`}>
                          {Math.floor(event.time / 60)}:{(event.time % 60).toString().padStart(2, '0')}
                        </Badge>
                      </div>
                      <p className="text-gray-300 text-sm">{event.description}</p>
                      
                      {/* 임팩트 바 */}
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs text-gray-400">임팩트:</span>
                        <div className="flex-1 h-2 bg-slate-600 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all ${
                              event.impact > 0 ? 'bg-green-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${Math.abs(event.impact)}%` }}
                          />
                        </div>
                        <span className={`text-xs font-medium ${
                          event.impact > 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {event.impact > 0 ? '+' : ''}{event.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
                  >
                    <PlayIcon className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default GameTimeline;
