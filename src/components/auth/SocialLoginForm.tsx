
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function SocialLoginForm() {
  const navigate = useNavigate();
  
  const handleSocialLogin = (provider: string) => {
    toast.info(`Authenticating with ${provider}...`);
    // In a real app, we would initiate the OAuth flow here
    setTimeout(() => {
      toast.success("Authentication successful!");
      navigate("/");
    }, 1500);
  };

  const handleEmailSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Authenticating...");
    setTimeout(() => {
      toast.success("Authentication successful!");
      navigate("/");
    }, 1500);
  };
  
  return (
    <Card className="max-w-md w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Welcome to CertChain</CardTitle>
        <CardDescription className="text-center">
          Blockchain-Integrated Certificate Management & Ranking System
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <Button
            variant="outline" 
            className="flex items-center space-x-2"
            onClick={() => handleSocialLogin("Google")}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>Sign in with Google</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center space-x-2"
            onClick={() => handleSocialLogin("Facebook")}
          >
            <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
              />
            </svg>
            <span>Sign in with Facebook</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center space-x-2"
            onClick={() => handleSocialLogin("Apple")}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.3 5.1c-1 0-1.9.4-2.6 1.2-.7.8-.9 1.7-.9 2.8 1 0 1.9-.4 2.6-1.2.7-.7 1-1.7 1-2.8zm3.5 9.2c0-1-.2-1.9-.7-2.7-.5-.8-1.1-1.2-1.7-1.5-.7-.3-1.6-.5-2.6-.5-1 0-1.8.1-2.4.3-1.3.4-2 .9-2 .9-.7.5-1.2 1.2-1.5 1.9-.3.8-.5 1.7-.5 2.6 0 1 .2 2 .7 2.9.5.9 1.1 1.6 2 2 .8.5 1.7.7 2.5.7 1.1 0 2.1-.3 2.9-.8.9-.5 1.6-1.2 2-2 .5-.9.7-1.8.7-2.8h-.4zm-3.5-9.2c-1 0-1.9.4-2.6 1.2-.7.8-.9 1.7-.9 2.8 1 0 1.9-.4 2.6-1.2.7-.7 1-1.7 1-2.8zm3.5 9.2c0-1-.2-1.9-.7-2.7-.5-.8-1.1-1.2-1.7-1.5-.7-.3-1.6-.5-2.6-.5-1 0-1.8.1-2.4.3-1.3.4-2 .9-2 .9-.7.5-1.2 1.2-1.5 1.9-.3.8-.5 1.7-.5 2.6 0 1 .2 2 .7 2.9.5.9 1.1 1.6 2 2 .8.5 1.7.7 2.5.7 1.1 0 2.1-.3 2.9-.8.9-.5 1.6-1.2 2-2 .5-.9.7-1.8.7-2.8h-.4z" />
            </svg>
            <span>Sign in with Apple</span>
          </Button>
        </div>

        <div className="flex items-center">
          <Separator className="flex-1" />
          <span className="mx-4 text-xs text-muted-foreground">OR</span>
          <Separator className="flex-1" />
        </div>

        <form onSubmit={handleEmailSignIn}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="university.email@edu" />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs text-primary underline-offset-4 hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input id="password" type="password" />
            </div>

            <Button type="submit" className="w-full">Sign In</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a href="#" className="text-primary underline-offset-4 hover:underline">
            Sign Up
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
