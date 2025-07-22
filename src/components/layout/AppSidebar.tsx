import { 
  Home, 
  CheckSquare, 
  Calendar, 
  CalendarDays, 
  FolderOpen, 
  Bot, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge?: number;
  isActive?: boolean;
}

const mainNavItems: NavItem[] = [
  { title: "Dashboard", icon: Home, href: "/", isActive: true },
  { title: "Daily Tasks", icon: CheckSquare, href: "/daily", badge: 5 },
  { title: "Weekly Overview", icon: CalendarDays, href: "/weekly" },
  { title: "Calendar", icon: Calendar, href: "/calendar" },
  { title: "Projects", icon: FolderOpen, href: "/projects", badge: 2 },
];

const bottomNavItems: NavItem[] = [
  { title: "AI Assistant", icon: Bot, href: "/assistant" },
  { title: "Settings", icon: Settings, href: "/settings" },
];

const taskLabels = [
  { name: "Personal", color: "bg-blue-500", count: 12 },
  { name: "Work", color: "bg-green-500", count: 8 },
  { name: "Study", color: "bg-purple-500", count: 3 },
  { name: "Health", color: "bg-red-500", count: 2 },
];

export const AppSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-background transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Sidebar Header */}
      <div className="flex h-16 items-center justify-between px-4">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-foreground">Menu</h2>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <Separator />

      {/* Main Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {/* Quick Add Button */}
        <Button 
          className={cn(
            "w-full justify-start gap-3 bg-primary hover:bg-primary/90",
            isCollapsed && "justify-center px-2"
          )}
        >
          <Plus className="h-4 w-4" />
          {!isCollapsed && "Quick Add Task"}
        </Button>

        <div className="space-y-1">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.href}
                variant={item.isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3",
                  isCollapsed && "justify-center px-2",
                  item.isActive && "bg-accent"
                )}
              >
                <Icon className="h-4 w-4" />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-left">{item.title}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto">
                        {item.badge}
                      </Badge>
                    )}
                  </>
                )}
              </Button>
            );
          })}
        </div>

        {/* Task Labels */}
        {!isCollapsed && (
          <div className="pt-4">
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Labels
            </h3>
            <div className="space-y-1">
              {taskLabels.map((label) => (
                <Button
                  key={label.name}
                  variant="ghost"
                  className="w-full justify-start gap-3 h-8"
                >
                  <div className={cn("h-2 w-2 rounded-full", label.color)} />
                  <span className="flex-1 text-left text-sm">{label.name}</span>
                  <Badge variant="outline" className="ml-auto text-xs">
                    {label.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t p-4">
        <div className="space-y-1">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3",
                  isCollapsed && "justify-center px-2"
                )}
              >
                <Icon className="h-4 w-4" />
                {!isCollapsed && item.title}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};