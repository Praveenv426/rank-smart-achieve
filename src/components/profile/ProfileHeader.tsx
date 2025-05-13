
import { User } from "@/types";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

interface ProfileHeaderProps {
  user: User;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="relative mb-8 pb-6">
      {/* Cover photo */}
      <div className="h-40 md:h-60 w-full bg-gradient-to-r from-primary/40 to-info/40 rounded-lg"></div>
      
      {/* Profile info */}
      <div className="flex flex-col md:flex-row items-center md:items-end -mt-16 md:-mt-20 px-4 md:px-8">
        <div className="h-32 w-32 rounded-full border-4 border-background bg-background overflow-hidden">
          <img
            src={user.avatar || "/placeholder.svg"}
            alt={user.name}
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="mt-3 md:mt-0 md:ml-6 text-center md:text-left flex-1">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground">
            {user.department} • {user.course}
          </p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Button variant="outline" size="sm">
            <Pencil className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
