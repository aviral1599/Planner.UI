"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { AppSidebar } from "./app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { NavActions } from "./nav-actions";
import { Separator } from "@radix-ui/react-separator";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/login" || pathname === "/register";

  if (isAuthRoute) {
    return (
      <div className="flex-1 min-h-screen bg-white overflow-y-auto">
        {children}
      </div>
    );
  }

  return (
    <>
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
          <div className="ml-auto px-3">
            <NavActions />
          </div>
        </header>
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
        <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
          {children}
        </div>
      </div>
      </SidebarInset>
    </SidebarProvider>
    </>
  );
}
