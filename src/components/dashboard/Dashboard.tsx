import { DashboardStats } from "./DashboardStats";
import { TaskList } from "./TaskList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, Clock, Zap } from "lucide-react";

export const Dashboard = () => {
  const upcomingEvents = [
    { time: "9:00 AM", title: "Team Standup", type: "meeting" },
    { time: "2:00 PM", title: "Client Review", type: "meeting" },
    { time: "4:30 PM", title: "Submit Report", type: "deadline" },
  ];

  const quickActions = [
    { title: "Schedule Focus Time", icon: Clock, color: "bg-blue-500" },
    { title: "Review Weekly Goals", icon: Calendar, color: "bg-green-500" },
    { title: "AI Task Suggestions", icon: Zap, color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Good morning, John! 👋
          </h1>
          <p className="text-muted-foreground mt-2">
            You have 8 tasks scheduled for today. Let's make it productive!
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Today</p>
          <p className="text-lg font-semibold text-foreground">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Tasks Section - Takes up more space */}
        <div className="lg:col-span-3">
          <TaskList />
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Today's Schedule */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium text-sm">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                  <Badge variant={event.type === 'meeting' ? 'default' : 'destructive'}>
                    {event.type}
                  </Badge>
                </div>
              ))}
              <Button variant="ghost" className="w-full justify-between text-sm">
                View Full Calendar
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start gap-3 h-auto p-3"
                  >
                    <div className={`p-2 rounded-lg ${action.color} text-white`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm">{action.title}</span>
                  </Button>
                );
              })}
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                AI Insight
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                You're most productive between 9-11 AM. Consider scheduling your high-priority tasks during this time window.
              </p>
              <Button size="sm" className="w-full">
                Get More Insights
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};