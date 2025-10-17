// import { useState } from 'react'
import "./App.css";
import TheHeader from "./components/layout/TheHeader.jsx";
import TasksPage from "./pages/TasksPage.jsx";

function App() {
  return (
    <div className="app">
      <TheHeader />
      <main>
        <TasksPage />
      </main>
    </div>
  );
}

export default App;
