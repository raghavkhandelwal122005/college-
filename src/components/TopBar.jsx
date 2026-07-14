import { Menu, Bell, Mail, ChevronDown } from "lucide-react";

export default function TopBar({ onMenuClick }) {
  return (
    <header className="h-16 shrink-0 bg-white border-b border-slate-200 flex items-center justify-between w-full z-30">
      {/* Left Brand Section - aligns with desktop sidebar */}
      <div className="hidden lg:flex items-center justify-center w-64 h-full border-r border-slate-200 shrink-0">
        <span className="text-2xl font-bold tracking-wide text-slate-800 font-sans pl-2">
          ERP
        </span>
      </div>

      {/* Right Content Section */}
      <div className="flex-1 flex items-center justify-between px-4 h-full">
        <div className="flex items-center gap-3">
          {/* On mobile, show brand name, or just hamburger */}
          <div className="lg:hidden font-semibold text-lg text-slate-800 mr-2">
            ERP
          </div>
          <button
            className="text-slate-600 hover:text-slate-800 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={onMenuClick}
          >
            <Menu size={20} />
          </button>
        </div>

        <div className="flex items-center gap-4 mr-2">
          {/* Mail Icon with badge 27 */}
          <button className="relative p-1 text-slate-600 hover:text-slate-800 transition-colors">
            <Mail size={20} strokeWidth={1.8} />
            <span className="absolute -top-1.5 -right-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#E53E3E] px-1 text-[9px] font-bold text-white leading-none">
              27
            </span>
          </button>

          {/* Bell Icon with badge 1 */}
          <button className="relative p-1 text-slate-600 hover:text-slate-800 transition-colors">
            <Bell size={20} strokeWidth={1.8} />
            <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#E53E3E] px-1 text-[9px] font-bold text-white leading-none">
              1
            </span>
          </button>

          {/* Profile Photo and Dropdown Caret */}
          <div className="flex items-center gap-1 ml-2 cursor-pointer">
            <div className="h-9 w-9 rounded-full overflow-hidden border border-slate-200 shrink-0">
              <img
                src="/student_profile.png"
                alt="Student Profile"
                className="h-full w-full object-cover"
                onError={(e) => {
                  // fallback if image not found
                  e.target.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=60";
                }}
              />
            </div>
            <ChevronDown size={14} className="text-slate-700 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </header>
  );
}
