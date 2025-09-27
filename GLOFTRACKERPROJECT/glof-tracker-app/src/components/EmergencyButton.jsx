import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Phone,
  Shield,
  Truck,
  Heart,
  AlertTriangle,
  X,
  MessageCircle,
  Bot
} from "lucide-react";

const EmergencyButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const emergencyContacts = [
    {
      name: "Disaster Management",
      number: "1077",
      icon: Shield,
      color: "destructive"
    },
    {
      name: "Police Emergency",
      number: "100",
      icon: Shield,
      color: "destructive"
    },
    {
      name: "Ambulance",
      number: "102",
      icon: Heart,
      color: "destructive"
    },
    {
      name: "Fire Brigade",
      number: "101",
      icon: Truck,
      color: "destructive"
    },
    {
      name: "GLOF Alert Center",
      number: "1234",
      icon: AlertTriangle,
      color: "risk-high"
    }
  ];

  const handleCall = (number) => {
    window.open(`tel:${number}`, '_self');
  };

  const handleChatbot = () => {
    // Placeholder for chatbot integration
    console.log("Opening AI Chatbot...");
    setIsOpen(false);
  };

  return (
    <>
      {/* Emergency Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="emergency"
          size="icon-lg"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full shadow-emergency animate-pulse"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
        </Button>
      </div>

      {/* Emergency Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80">
          <Card className="bg-card/95 backdrop-blur-md border-border shadow-xl">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 text-destructive mr-2" />
                Emergency Services
              </h3>
              
              <div className="space-y-2 mb-4">
                {emergencyContacts.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => handleCall(contact.number)}
                    >
                      <Icon className="h-4 w-4 mr-3" />
                      <div className="flex-1 text-left">
                        <div className="font-medium">{contact.name}</div>
                        <div className="text-sm opacity-70">{contact.number}</div>
                      </div>
                    </Button>
                  );
                })}
              </div>
              
              <div className="border-t border-border pt-4">
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={handleChatbot}
                >
                  <Bot className="h-4 w-4 mr-2" />
                  AI Emergency Assistant
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Get instant guidance and support
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default EmergencyButton;