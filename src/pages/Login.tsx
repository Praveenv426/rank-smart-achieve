
import { SocialLoginForm } from "@/components/auth/SocialLoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-br from-background to-secondary">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent mb-2">
            CertChain
          </h1>
          <p className="text-muted-foreground">
            Blockchain-powered certificate verification and ranking
          </p>
        </div>
        
        <SocialLoginForm />
        
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <span className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-success mr-1"></span>
              Blockchain Secured
            </span>
            <span className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-info mr-1"></span>
              OCR Technology
            </span>
            <span className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-warning mr-1"></span>
              Tamper-Proof
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
