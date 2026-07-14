import Card from "../components/Card";

const rows = [
  { subject: "Data Structures", held: 42, attended: 38 },
  { subject: "Digital Electronics", held: 36, attended: 33 },
  { subject: "Engineering Mathematics III", held: 40, attended: 30 },
  { subject: "Computer Networks", held: 30, attended: 28 },
  { subject: "Environmental Science", held: 20, attended: 19 },
];

function pct(a, h) {
  return Math.round((a / h) * 100);
}

export default function Attendance() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display text-xl font-semibold text-ink-900">
          Attendance
        </h2>
        <p className="text-slate-500 text-sm mt-0.5">
          Subject-wise attendance for the current semester.
        </p>
      </div>

      <Card padded={false}>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500 text-xs uppercase tracking-wide border-b border-slate-100">
              <th className="px-5 py-3 font-medium">Subject</th>
              <th className="px-5 py-3 font-medium">Classes held</th>
              <th className="px-5 py-3 font-medium">Attended</th>
              <th className="px-5 py-3 font-medium">Percentage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => {
              const p = pct(r.attended, r.held);
              const short = p < 75;
              return (
                <tr key={r.subject}>
                  <td className="px-5 py-3.5 text-ink-800 font-medium">
                    {r.subject}
                  </td>
                  <td className="px-5 py-3.5 text-slate-600">{r.held}</td>
                  <td className="px-5 py-3.5 text-slate-600">{r.attended}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
                        short
                          ? "bg-amber-500/10 text-amber-700"
                          : "bg-teal-600/10 text-teal-700"
                      }`}
                    >
                      {p}%
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
