
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  LayoutDashboard,
  Upload,
  FileBox,
  User,
  Trophy,
  ChevronDown,
  ChevronUp,
  X,
  Menu
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useIsMobile();
  
  // Auto-close sidebar on mobile
  React.useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // If sidebar is closed and on mobile, just show hamburger icon
  if (!isOpen && isMobile) {
    return (
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded-full shadow-lg"
      >
        <Menu size={20} />
      </button>
    );
  }

  return (
    <aside
      className={cn(
        "bg-card text-card-foreground flex flex-col border-r shadow-sm transition-all duration-300",
        isOpen ? "w-64" : "w-20",
        isMobile && isOpen && "fixed inset-y-0 left-0 z-50"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div className={cn("flex items-center", !isOpen && "justify-center w-full")}>
          {isOpen ? (
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              CertChain
            </span>
          ) : (
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              CC
            </span>
          )}
        </div>

        <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-gray-700"
        >
          {isMobile ? (
            <X size={20} />
          ) : (
            isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />
          )}
        </button>
      </div>

      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-2">
          <NavItem to="/" icon={<LayoutDashboard size={20} />} text="Dashboard" isOpen={isOpen} />
          <NavItem to="/upload" icon={<Upload size={20} />} text="Upload Certificate" isOpen={isOpen} />
          <NavItem to="/certificates" icon={<FileBox size={20} />} text="Certificates" isOpen={isOpen} />
          <NavItem to="/profile" icon={<User size={20} />} text="Profile" isOpen={isOpen} />
          <NavItem to="/leaderboard" icon={<Trophy size={20} />} text="Leaderboard" isOpen={isOpen} />
        </nav>
      </div>

      <div className="border-t p-4">
        <div className="flex items-center">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/300?img=8"
              alt="User"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success"></span>
          </div>
          {isOpen && (
            <div className="ml-3">
              <p className="text-sm font-medium">Alex Johnson</p>
              <p className="text-xs text-gray-500">Computer Science</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
}

const NavItem = ({ to, icon, text, isOpen }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all",
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-secondary",
          !isOpen && "justify-center"
        )
      }
      end
    >
      {icon}
      {isOpen && <span className="ml-3">{text}</span>}
    </NavLink>
  );
};

export default Sidebar;
