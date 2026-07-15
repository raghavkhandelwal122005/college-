import { Menu, Bell, Mail, ChevronDown } from "lucide-react";

export default function TopBar({ onMenuClick }) {
  return (
    <header className="shrink-0 bg-white border-b border-slate-200 w-full z-30 flex flex-col justify-between">
      {/* Row 1: Centered ERP Logo */}
      <div className="w-full flex justify-center pt-4 pb-1">
        <span className="text-[26px] font-medium tracking-normal text-[#1A202C] font-sans">
          ERP
        </span>
      </div>

      {/* Row 2: Controls (Hamburger & Right Actions) */}
      <div className="w-full flex items-center justify-between px-4 pb-3">
        {/* Left: Hamburger menu */}
        <button
          className="text-slate-600 hover:text-slate-800 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={onMenuClick}
        >
          <Menu size={24} className="stroke-[2]" />
        </button>

        {/* Right: Notifications & Profile */}
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
                src="/newphoto.jpeg"
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
