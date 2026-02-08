# EzyRent Listings

A performant, interactive React application for browsing rental properties. Built as a pre-interview assessment for EzyRent.

---

🔗 **Live Demo:** [EzyRent Listings | Ayomide Kayode](https://ezyrent-listings.vercel.app/)

---

## 🚀 Overview

This project demonstrates a production-ready approach to a simple listing interface. It prioritizes **component composition**, **clean architecture**, and **simulated real-world constraints** (like async data fetching) over complexity.

### Key Features

- **Property Listing:** Responsive grid layout with high-quality imagery.
- **Smart Filtering:** Client-side search that queries both **Location** and **Title**.
- **Sorting:** Price sorting (Low-High / High-Low).
- **Simulated Async API:** Mimics network latency (1000ms) to demonstrate Loading and Error states.
- **Modal Interaction:** Detailed property view with a "Book Viewing" CTA, maintaining the Single Page Application (SPA) context.
- **Robust Empty States:** User-friendly reset functionality when search results are empty.

This project demonstrates a production-ready approach to a simple listing interface. It prioritizes **component composition**, **clean architecture**, and **simulated real-world constraints** over unnecessary complexity.

---

## 🛠 Tech Stack & Rationale

| Tech           | Choice                | Why?                                                                             |
| :------------- | :-------------------- | :------------------------------------------------------------------------------- |
| **Build Tool** | Vite                  | Significantly faster HMR and build times compared to CRA.                        |
| **Framework**  | React + TypeScript    | Type safety prevents runtime errors and serves as self-documentation.            |
| **Styling**    | Tailwind CSS (v4)     | Utility-first approach allows for rapid UI iteration within the component files. |
| **Icons**      | Lucide React          | Lightweight, consistent SVG icons.                                               |
| **Utils**      | clsx + tailwind-merge | Clean conditional class management without template literal messiness.           |

---

## 📂 Architecture

I chose a flat, feature-grouped structure to keep the dependency graph shallow and readable.

```text
src/
├── components/
│   ├── PropertyCard.tsx    # Pure presentation component
│   ├── PropertyList.tsx    # Grid layout wrapper
│   ├── PropertyModal.tsx   # Detailed view (Portal/Dialog)
│   ├── FilterBar.tsx       # Search inputs & sort controls
│   ├── EmptyState.tsx      # Reset functionality
│   └── Layout.tsx          # Main application shell
├── data/
│   └── properties.ts       # Mock JSON data (15 Listings)
├── hooks/
│   ├── useProperties.ts    # Simulates API fetching (Loading/Error logic)
│   └── usePropertySearch.ts # Handles filtering & sorting logic (Separation of Concerns)
├── types/
│   └── index.ts            # Shared TypeScript interfaces
├── App.tsx                 # Root container (State holder)
└── main.tsx                # Entry point
```

---

## 📅 Development Phases

**Foundation:** Setup Typescript interfaces and Mock Data.

**Logic Core:** Build useProperties hook for data fetching simulation.

**Visual Skeleton:** Create PropertyCard and PropertyList UI.

**Interaction:** Implement FilterBar and client-side logic.

**Detail View:** Build the Property Modal.

**Polish:** Loading states, empty states, and responsive tweaks.

---

## 🧠 Key Technical Decisions & Trade-offs

**1.Separation of Concerns (Hooks):**

I separated the data fetching from the data processing:

- **`useProperties`**: Responsible for the "Network" layer (simulated).

- **`usePropertySearch`**: Responsible for the "Business Logic" (filtering/sorting).

- **Benefit**: This makes the components cleaner and allows for easier unit testing of the logic in isolation.

**2. State Management: `useState` vs Redux:**

**Decision**: Used local state lifted to `App.tsx`.

**Reasoning**: For a list of <100 items, Redux is over-engineering. Context API was considered but deemed unnecessary as prop drilling is minimal (max 2 levels). The state is co-located where it is needed.

**3. Interaction: Modals vs Routing:**

**Decision**: Used a Modal for property details.

**Reasoning**: A Modal keeps the user on the listing page, preserving their scroll position and search context. In a real-world browsing scenario, users often want to "peek" at details without navigating away and losing their place.

**4. Client-Side Search:**

**Decision**: All filtering happens on the client.

**Reasoning**: With a small dataset, client-side filtering provides an "instant" UX (0ms latency). In a production app with thousands of listings, I would debounce the input and move this to a Server-Side query.

---

## 🏃‍♂️ How to Run

Clone the repo

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

### Building for Production

To build the application for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

### _Built by Ayomide Kayode_
