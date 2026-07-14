import Card from "../components/Card";
import { Download } from "lucide-react";

const ledger = [
  { head: "Tuition fee", term: "Odd 2026", amount: "₹68,000", status: "Paid" },
  { head: "Examination fee", term: "Odd 2026", amount: "₹2,500", status: "Paid" },
  { head: "Conveyance fee", term: "Odd 2026", amount: "₹14,000", status: "Paid" },
  { head: "Hostel fee", term: "Odd 2026", amount: "₹45,000", status: "Due" },
];

export default function FeeManagement() {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h2 className="font-display text-xl font-semibold text-ink-900">
            Fee Management
          </h2>
          <p className="text-slate-500 text-sm mt-0.5">
            Ledger for the current academic session.
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-800 bg-teal-600/10 px-3.5 py-2 rounded-lg">
          <Download size={15} /> Download statement
        </button>
      </div>

      <Card padded={false}>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500 text-xs uppercase tracking-wide border-b border-slate-100">
              <th className="px-5 py-3 font-medium">Fee head</th>
              <th className="px-5 py-3 font-medium">Term</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {ledger.map((row) => (
              <tr key={row.head}>
                <td className="px-5 py-3.5 text-ink-800 font-medium">
                  {row.head}
                </td>
                <td className="px-5 py-3.5 text-slate-600">{row.term}</td>
                <td className="px-5 py-3.5 text-slate-600">{row.amount}</td>
                <td className="px-5 py-3.5">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
                      row.status === "Paid"
                        ? "bg-teal-600/10 text-teal-700"
                        : "bg-amber-500/10 text-amber-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
