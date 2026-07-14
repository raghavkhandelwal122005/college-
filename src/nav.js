import {
  LayoutDashboard,
  CalendarClock,
  UserRound,
  BookOpen,
  Mail,
  Megaphone,
  MessageSquare,
  Bus,
  ShieldAlert,
  FileText,
  ListChecks,
  GraduationCap,
  IndianRupee,
  PlaneTakeoff,
  ClipboardCheck,
  FileEdit,
} from "lucide-react";

export const allNavItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/timetable", label: "Time Table", icon: CalendarClock },
  { to: "/teacher", label: "Teacher", icon: UserRound },
  { to: "/user", label: "User", icon: UserRound },
  { to: "/subject", label: "Subject", icon: BookOpen },
  { to: "/message", label: "Message", icon: Mail },
  { to: "/announcement", label: "Announcement", icon: Megaphone, hasDropdown: true },
  { to: "/feedback", label: "Feedback", icon: MessageSquare },
  { to: "/conveyance", label: "Conveyance", icon: Bus },
  { to: "/grievances", label: "Grievances", icon: ShieldAlert },
  { to: "/anti-ragging", label: "Submit Anti-Ragging Undertaking Reference Number", icon: FileText },
  { to: "/electives", label: "Open Elective Selection", icon: ListChecks },
  { to: "/minor-degree", label: "Minor Degree", icon: GraduationCap },
  { to: "/fee-management", label: "Fee Management", icon: IndianRupee, hasDropdown: true },
  { to: "/od-leave", label: "OD Leave Application", icon: PlaneTakeoff },
  { to: "/attendance", label: "Attendance", icon: ClipboardCheck, hasDropdown: true },
  { to: "/examinations", label: "Examinations", icon: FileEdit, hasDropdown: true },
];

export const navSections = [
  {
    label: "All",
    items: allNavItems
  }
];
