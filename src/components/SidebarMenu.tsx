
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  Home, 
  Calendar, 
  Activity, 
  Bell, 
  Sun, 
  Menu, 
  X, 
  LogOut,
  User
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SidebarMenuProps {
  onLogout: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(true); // Set to true by default on desktop

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    // Only close on mobile
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const sidebarVariants = {
    open: { 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: { 
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Calendar, label: "Doctor Appointment", path: "/appointment" },
    { icon: Activity, label: "Health Tracker", path: "/health-tracker" },
    { icon: Bell, label: "Medicine Reminder", path: "/medication" },
    { icon: Sun, label: "Daily Health Tips", path: "/health-tips" },
  ];

  return (
    <>
      {/* Hamburger button for mobile */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors text-gray-800"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Background overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg md:relative md:shadow-none",
          isOpen ? "block" : "hidden md:block"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Logo and title */}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-medical-primary">HealtheNav</h1>
            <p className="text-sm text-gray-500">Your Health Companion</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 pb-4">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={closeSidebar}
                    className={({ isActive }) => cn(
                      "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-medical-primary text-white" 
                        : "text-gray-700 hover:bg-medical-secondary hover:text-medical-dark"
                    )}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* User profile */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center mb-4">
              <div className="bg-medical-secondary p-2 rounded-full">
                <User className="h-5 w-5 text-medical-primary" />
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">Anant Prabhu</div>
                <div className="text-xs text-gray-500 truncate">anantgirirajprabhu@gmail.com</div>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex w-full items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default SidebarMenu;
