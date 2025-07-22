import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckSquare, 
  Clock, 
  TrendingUp, 
  Calendar,
  Target,
  Zap
} from "lucide-react";

interface StatCard {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ComponentType<{ className?: string }>;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color: string;
}

const stats: StatCard[] = [
  {
    title: "Tasks Completed",
    value: 24,
    subtitle: "Today",
    icon: CheckSquare,
    trend: { value: 12, isPositive: true },
    color: "text-success",
  },
  {
    title: "In Progress",
    value: 8,
    subtitle: "Active tasks",
    icon: Clock,
    color: "text-info",
  },
  {
    title: "This Week",
    value: "85%",
    subtitle: "Completion rate",
    icon: TrendingUp,
    trend: { value: 5, isPositive: true },
    color: "text-warning",
  },
  {
    title: "Upcoming",
    value: 12,
    subtitle: "Next 3 days",
    icon: Calendar,
    color: "text-primary",
  },
  {
    title: "Goals Met",
    value: "3/5",
    subtitle: "This month",
    icon: Target,
    trend: { value: 2, isPositive: true },
    color: "text-purple-500",
  },
  {
    title: "Productivity",
    value: "92%",
    subtitle: "vs last week",
    icon: Zap,
    trend: { value: 8, isPositive: true },
    color: "text-green-500",
  },
];

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg bg-muted/50`}>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </div>
                {stat.trend && (
                  <Badge 
                    variant={stat.trend.isPositive ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {stat.trend.isPositive ? "+" : "-"}{stat.trend.value}%
                  </Badge>
                )}
              </div>
              
              <div className="mt-3">
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.title}
                </p>
                {stat.subtitle && (
                  <p className="text-xs text-muted-foreground/80">
                    {stat.subtitle}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};