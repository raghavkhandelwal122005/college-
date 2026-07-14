import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-canvas overflow-hidden">
      <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex-1 flex min-w-0 overflow-hidden">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 overflow-y-auto bg-[#eef1f5]">
          <div className="w-full p-4 md:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
