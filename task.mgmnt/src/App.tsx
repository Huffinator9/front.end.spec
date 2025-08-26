// src: src/App.tsx

//import React from "react";
//import { useAuth, AuthProvider } from "./context/AuthContext";
//import TaskDashboard from "./components/TaskDashboard";
//
//export default function App() {
//  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();
//
//  if (isLoading) return <p>Loading...</p>;
//
//  if (!isAuthenticated)
//    return (
//      <div className="flex flex-col items-center justify-center h-screen">
//        <h2 className="text-2xl font-bold mb-4">Please log in</h2>
//        <button
//          onClick={() => loginWithRedirect()}
//          className="bg-blue-500 text-white px-4 py-2 rounded"
//        >
//          Log In
//        </button>
//      </div>
//    );
//
//  return (
//    <div>
//      <div className="flex justify-end p-4">
//        <button
//          onClick={() => logout({ returnTo: window.location.origin })}
//          className="bg-red-500 text-white px-4 py-2 rounded"
//        >
//          Log Out
//        </button>
//      </div>
//      <TaskDashboard />
//    </div>
//  );
//}

import React from "react";
import { useAuth, AuthProvider } from "./context/AuthContext";
import TaskDashboard from "./components/TaskDashboard";
import LoginForm from "./components/LoginForm";

const AppContent = () => {
  const { user, login, logout } = useAuth();

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded m-4"
      >
        Log Out
      </button>
      <TaskDashboard />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
