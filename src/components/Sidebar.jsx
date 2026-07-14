import { NavLink } from "react-router-dom";
import { X, ChevronLeft } from "lucide-react";
import { allNavItems } from "../nav";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile scrim */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-[#1e2634] text-slate-300 flex flex-col
        transform transition-transform duration-200 lg:static lg:translate-x-0 shrink-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Mobile-only header with close button */}
        <div className="flex lg:hidden items-center justify-between h-16 px-5 border-b border-white/5 shrink-0">
          <span className="font-semibold text-white tracking-wide text-lg">ERP</span>
          <button className="text-slate-400 hover:text-white" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 overflow-y-auto sidebar-scroll py-3 px-3 space-y-0.5">
          {allNavItems.map(({ to, label, icon: Icon, hasDropdown }) => (
            <div key={to}>
              <NavLink
                to={to}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-start justify-between rounded px-3 py-2.5 text-[13px] font-medium leading-snug transition-colors ${
                    isActive
                      ? "bg-[#161d29] text-white"
                      : "text-[#94a3b8] hover:text-white hover:bg-white/[0.03]"
                  }`
                }
              >
                <div className="flex items-start gap-3">
                  <Icon size={16} strokeWidth={1.8} className="mt-0.5 shrink-0" />
                  <span className="break-words leading-tight">{label}</span>
                </div>
                {hasDropdown && (
                  <ChevronLeft size={13} className="text-slate-400 mt-1 shrink-0 ml-1" />
                )}
              </NavLink>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
