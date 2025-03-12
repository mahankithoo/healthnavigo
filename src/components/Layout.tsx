
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { toast } from "sonner";

const Layout: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Remove user from session storage
    sessionStorage.removeItem("user");
    
    // Show notification
    toast.success("You have been logged out successfully");
    
    // Navigate to login page
    navigate("/login");
  };
  
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <SidebarMenu onLogout={handleLogout} />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Main content area */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
        
        {/* Footer */}
        <footer className="py-4 px-6 border-t border-gray-200 bg-white text-center text-gray-500 text-sm">
          <p>© 2023 HealtheNav. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
