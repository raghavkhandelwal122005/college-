# CampusERP — Student Portal Dashboard

A frontend-only React starter for a college ERP-style student portal: dark
sidebar navigation grouped by section, a dashboard with stats and quick
actions, and a couple of fully built sample pages (Conveyance / bus route
application, Attendance, Fee Management). Every other sidebar link renders a
placeholder page so you can see the full shell and wire up real pages one at
a time.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  nav.js                  # single source of truth for sidebar sections/links
  components/
    Sidebar.jsx            # grouped nav with active-state accent bar
    TopBar.jsx              # header with menu toggle + icon actions
    Layout.jsx              # page shell wrapping Sidebar + TopBar + content
    Card.jsx                # shared white card container
  pages/
    Dashboard.jsx            # stat strip, announcements, quick actions
    Conveyance.jsx           # route/pickup form with a policy summary
    Attendance.jsx           # subject-wise attendance table
    FeeManagement.jsx         # fee ledger table
    Placeholder.jsx          # generic "coming soon" page for other modules
  App.jsx                   # routes — maps every nav item to a page or placeholder
```

## Adding a real page

1. Create `src/pages/YourModule.jsx`.
2. Add it to the `builtPages` map at the top of `src/App.jsx`, keyed by the
   route path already defined in `src/nav.js`.

That's it — the route, sidebar link, and page title all stay in sync
automatically.

## Wiring up a real backend

This starter has no backend or persistence — forms (like Conveyance) just
show a local success state. To make it real:

- Swap the mock arrays in `Dashboard.jsx`, `Attendance.jsx`, and
  `FeeManagement.jsx` for `fetch`/API calls.
- Point `Conveyance.jsx`'s `handleSubmit` at your API endpoint instead of
  setting local state.
- Add an auth layer / route guards in `App.jsx` if the portal needs login.

## Design notes

- Palette: deep navy sidebar (`ink-900`), teal primary accent (`teal-600`),
  soft grey canvas background — tuned to read as a calm, functional admin
  tool rather than a marketing page.
- Section dots + grouped nav labels (Academics / Campus Life / Support /
  Finance) encode how a student actually thinks about these modules, not how
  a database would name the tables.
- Typography: Sora for headings, Inter for body/UI text.

## Note on content

The policy text on the Conveyance page is placeholder copy written for this
demo — replace it with your own institute's actual terms before using this
in production.
