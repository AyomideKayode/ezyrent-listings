# EzyRent Listings

A performant, interactive React application for browsing rental properties. Built as a pre-interview assessment for EzyRent.

---

## 🚀 Overview

This project demonstrates a production-ready approach to a simple listing interface. It prioritizes **component composition**, **clean architecture**, and **simulated real-world constraints** (like async data fetching) over complexity.

### Key Features

- **Property Listing:** Responsive grid layout for rental properties.
- **Client-Side Filtering:** Instant search by location.
- **Simulated Async API:** Mimics network latency to demonstrate loading states.
- **Interaction:** Modal-based detail view to maintain a Single Page Application (SPA) feel.

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
│   ├── ui/                 # Reusable generic UI (Button, Input, Badge)
│   ├── PropertyCard.tsx    # Pure presentation component
│   ├── PropertyList.tsx    # Grid layout wrapper
│   ├── FilterBar.tsx       # Search inputs & sort controls
│   ├── PropertyModal.tsx   # Detailed view (Portal/Dialog)
│   └── Layout.tsx          # Main application shell
├── data/
│   └── properties.ts       # Mock JSON data
├── hooks/
│   └── useProperties.ts    # Custom hook encapsulating fetch logic & state
├── types/
│   └── index.ts            # Shared TypeScript interfaces
├── App.tsx                 # Root container
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

## 🏃‍♂️ Running Locally

Clone the repo

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```
