
import React from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TopNavbar = () => {
  return (
    <header className="bg-card border-b">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">
            <span className="text-muted-foreground mr-2">Hello,</span>
            <span>Alex</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-xs flex items-center justify-center text-white">
                  3
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-3 cursor-pointer hover:bg-secondary">
                <div>
                  <p className="font-medium text-sm">Certificate Verified</p>
                  <p className="text-xs text-muted-foreground">Your "AWS Certified" certificate is now verified on blockchain.</p>
                  <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 cursor-pointer hover:bg-secondary">
                <div>
                  <p className="font-medium text-sm">Rank Improved</p>
                  <p className="text-xs text-muted-foreground">Your rank has improved from 15 to 12!</p>
                  <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 cursor-pointer hover:bg-secondary">
                <div>
                  <p className="font-medium text-sm">Certificate Processing</p>
                  <p className="text-xs text-muted-foreground">Your "Leadership Workshop" certificate is being processed.</p>
                  <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <img
                  src="https://i.pravatar.cc/300?img=8"
                  alt="User"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Help & Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
