# React Committee App

This is a React application that displays information about different committees and their members.

## Prerequisites

Before running the project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended version: latest LTS)
- [npm](https://www.npmjs.com/) (Comes with Node.js)
- [Vite](https://vitejs.dev/) (Used for fast development and bundling)

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Application

To start the development server with Vite, run:
```sh
npm run dev
```
This will launch the application in development mode, and you can access it at `http://localhost:5173` (or another port if specified by Vite).

## Libraries Used

This project uses the following libraries:
- `react`: JavaScript library for building user interfaces
- `react-router-dom`: Enables client-side routing
- `lucide-react`: Provides icons, such as `Menu` and `X`
- `vite`: A fast build tool for modern web projects

## Folder Structure

```
📂 project-folder
├── 📁 src
│   ├── 📁 components     # Reusable components like CommitteeCard
│   ├── 📁 pages          # Different page components
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point for the React app
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── README.md            # This file
```

## Building for Production

To build the project for production, run:
```sh
npm run build
```
This will generate an optimized build in the `dist/` folder.

## License

This project is open-source. Modify and use it as needed.

---
If you encounter any issues, feel free to open an issue or contribute to the project!

