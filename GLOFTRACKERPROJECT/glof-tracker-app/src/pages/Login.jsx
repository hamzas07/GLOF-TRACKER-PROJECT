import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Mountain, 
  Shield, 
  Users, 
  User, 
  Eye, 
  EyeOff,
  LogIn,
  UserPlus
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("user");

  const handleLogin = (userRole) => {
    console.log(`Logging in as ${userRole}`);
    // Placeholder for authentication logic
  };

  const handleGuestAccess = () => {
    console.log("Accessing as guest");
    // Redirect to dashboard with limited access
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-primary rounded-xl">
              <Mountain className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground">GLOF Tracker</h1>
          <p className="text-muted-foreground">Early Warning System</p>
        </div>

        <Card className="bg-card/90 backdrop-blur-md border-border/50">
          <CardHeader>
            <CardTitle className="text-center text-foreground">Access System</CardTitle>
            <CardDescription className="text-center">
              Sign in to monitor glacier lake conditions and access emergency services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </TabsTrigger>
                <TabsTrigger value="register">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Register
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-input/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="bg-input/50 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Role</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={role === "user" ? "default" : "outline"}
                      onClick={() => setRole("user")}
                      className="flex items-center space-x-2"
                    >
                      <User className="h-4 w-4" />
                      <span>User</span>
                    </Button>
                    <Button
                      variant={role === "admin" ? "default" : "outline"}
                      onClick={() => setRole("admin")}
                      className="flex items-center space-x-2"
                    >
                      <Shield className="h-4 w-4" />
                      <span>Admin</span>
                    </Button>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  variant="hero"
                  onClick={() => handleLogin(role)}
                >
                  Sign In as {role === "admin" ? "Administrator" : "User"}
                </Button>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-input/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="regEmail">Email</Label>
                  <Input
                    id="regEmail"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-input/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="regPassword">Password</Label>
                  <Input
                    id="regPassword"
                    type="password"
                    placeholder="Create a password"
                    className="bg-input/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Your city/region"
                    className="bg-input/50"
                  />
                </div>

                <Button className="w-full" variant="hero">
                  Create Account
                </Button>
              </TabsContent>
            </Tabs>

            {/* Guest Access */}
            <div className="mt-6 pt-6 border-t border-border">
              <Button 
                variant="glass" 
                className="w-full"
                onClick={handleGuestAccess}
              >
                <Users className="h-4 w-4 mr-2" />
                Continue as Guest
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Limited access to public information and basic monitoring
              </p>
            </div>

            {/* Role Information */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">User Access:</span>
                <Badge variant="secondary">Monitoring & Alerts</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Admin Access:</span>
                <Badge variant="secondary">Full System Control</Badge>
              </div>
            </div>

            {/* Footer Links */}
            <div className="mt-6 text-center space-y-2">
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot your password?
              </Link>
              <div className="text-xs text-muted-foreground">
                By signing in, you agree to our emergency response protocols
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;