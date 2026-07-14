import { useState } from "react";
import Card from "../components/Card";
import { Bus, CheckCircle2, Info } from "lucide-react";

const routes = [
  "Route 1 – City Center",
  "Route 2 – North Colony",
  "Route 3 – Riverside",
  "Route 4 – Tech Park",
  "Route 5 – Old Town",
];

// Rewritten in plain language for this demo — swap in your own institute's
// policy text here.
const policyPoints = [
  "Seats are allotted on a first-come, first-served basis for the full academic session; monthly bookings aren't available.",
  "The route fee is paid as a single instalment at the start of the session — partial payments aren't accepted, and paid fees aren't refunded or transferred once confirmed.",
  "Buses run to a fixed pickup schedule, so please arrive at your stop a few minutes early.",
  "Drop-offs are limited to the stop listed on your pass, and changing your route or stop needs approval from the transport office first.",
  "Keep your pass with you and be ready to show it when asked.",
  "Boarding without a valid, paid pass may result in a fine, and repeated cases will be billed for the full session.",
];

export default function Conveyance() {
  const [route, setRoute] = useState("");
  const [pickup, setPickup] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!route || !pickup || !agreed) return;
    setSubmitted(true);
  }

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display text-xl font-semibold text-ink-900">
          Conveyance Application
        </h2>
        <p className="text-slate-500 text-sm mt-0.5">
          Apply for a seat on the institute bus service.
        </p>
      </div>

      <Card>
        <div className="flex items-start gap-3 mb-4">
          <div className="h-9 w-9 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
            <Info size={18} />
          </div>
          <div>
            <h3 className="font-display font-semibold text-ink-900">
              Before you apply
            </h3>
            <p className="text-sm text-slate-500 mt-0.5">
              A quick summary of how the conveyance facility works.
            </p>
          </div>
        </div>
        <ul className="space-y-2.5">
          {policyPoints.map((point, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-ink-800">
              <span className="h-5 w-5 rounded-full bg-teal-600/10 text-teal-700 text-[11px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              {point}
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <div className="flex items-center gap-3 mb-5">
          <div className="h-9 w-9 rounded-lg bg-teal-600/10 text-teal-700 flex items-center justify-center shrink-0">
            <Bus size={18} />
          </div>
          <h3 className="font-display font-semibold text-ink-900">
            Route details
          </h3>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center text-center py-8">
            <CheckCircle2 size={36} className="text-teal-600 mb-3" />
            <p className="font-display font-semibold text-ink-900">
              Application submitted
            </p>
            <p className="text-sm text-slate-500 mt-1 max-w-sm">
              We've recorded your request for {route.split(" – ")[0]}, pickup
              at "{pickup}". You'll see it reflected here once it's approved.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setRoute("");
                setPickup("");
                setAgreed(false);
              }}
              className="mt-4 text-sm font-medium text-teal-700 hover:text-teal-800"
            >
              Submit another application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
            <div>
              <label className="block text-sm font-medium text-ink-800 mb-1.5">
                Route
              </label>
              <select
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-ink-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500"
              >
                <option value="">Select route</option>
                {routes.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-800 mb-1.5">
                Pickup point
              </label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="e.g. Malviya Nagar bus stand"
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-ink-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500"
              />
            </div>

            <label className="flex items-start gap-2.5 text-sm text-slate-600 pt-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500/40"
              />
              I've read the policy summary above and agree to the conveyance
              terms.
            </label>

            <button
              type="submit"
              disabled={!route || !pickup || !agreed}
              className="rounded-lg bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium text-sm px-5 py-2.5 transition-colors"
            >
              Submit Application
            </button>
          </form>
        )}
      </Card>
    </div>
  );
}
