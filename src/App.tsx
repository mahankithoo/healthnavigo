
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import AppointmentPage from "./components/AppointmentPage";
import HealthTrackerPage from "./components/HealthTrackerPage";
import MedicationPage from "./components/MedicationPage";
import HealthTipsPage from "./components/HealthTipsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Auth guard component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const user = sessionStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  if (isAuthenticated === null) {
    // Still loading
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    // Redirect to login page
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-right" closeButton />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="appointment" element={<AppointmentPage />} />
            <Route path="health-tracker" element={<HealthTrackerPage />} />
            <Route path="medication" element={<MedicationPage />} />
            <Route path="health-tips" element={<HealthTipsPage />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
