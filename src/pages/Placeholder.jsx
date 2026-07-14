import Card from "../components/Card";
import { Construction } from "lucide-react";

export default function Placeholder({ label }) {
  return (
    <Card className="flex flex-col items-center justify-center text-center py-16">
      <div className="h-12 w-12 rounded-full bg-teal-600/10 text-teal-700 flex items-center justify-center mb-4">
        <Construction size={22} />
      </div>
      <h2 className="font-display font-semibold text-ink-900 text-lg mb-1.5">
        {label}
      </h2>
      <p className="text-slate-500 text-sm max-w-sm">
        This module is a placeholder in the demo. Wire it up to your backend
        the same way the Dashboard and Conveyance pages are built.
      </p>
    </Card>
  );
}
