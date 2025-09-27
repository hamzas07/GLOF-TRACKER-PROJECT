import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import EmergencyButton from "./components/EmergencyButton";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Analytics from "./pages/Analytics";
import Organizations from "./pages/Organizations";
import Donations from "./pages/Donations";
import Government from "./pages/Government";
import Safety from "./pages/Safety";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/government" element={<Government />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/emergency" element={<Safety />} />
            <Route path="/chatbot" element={<Home />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <EmergencyButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;