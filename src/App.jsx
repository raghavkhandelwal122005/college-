import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Conveyance from "./pages/Conveyance";
import Attendance from "./pages/Attendance";
import FeeManagement from "./pages/FeeManagement";
import Placeholder from "./pages/Placeholder";
import { allNavItems } from "./nav";

// Pages that have real, built-out content.
const builtPages = {
  "/": { title: "Dashboard", element: <Dashboard /> },
  "/conveyance": { title: "Conveyance", element: <Conveyance /> },
  "/attendance": { title: "Attendance", element: <Attendance /> },
  "/fee-management": { title: "Fee Management", element: <FeeManagement /> },
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {allNavItems.map(({ to, label }) => {
          const built = builtPages[to];
          return (
            <Route
              key={to}
              path={to}
              element={
                <Layout title={built ? built.title : label}>
                  {built ? built.element : <Placeholder label={label} />}
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
