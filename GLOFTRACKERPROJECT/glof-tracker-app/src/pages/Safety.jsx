import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  AlertTriangle, 
  MapPin, 
  Clock, 
  Phone,
  Users,
  CheckCircle,
  XCircle,
  Info,
  Zap,
  Car,
  Home,
  Heart,
  Navigation
} from "lucide-react";

const Safety = () => {
  const [selectedRiskLevel, setSelectedRiskLevel] = useState("high");

  const emergencySteps = [
    {
      step: 1,
      title: "Immediate Alert Recognition",
      description: "Recognize GLOF warning signals: unusual sounds, ground vibrations, water level changes",
      icon: AlertTriangle,
      timeframe: "0-2 minutes"
    },
    {
      step: 2,
      title: "Alert Community",
      description: "Immediately warn family, neighbors, and community members using all available means",
      icon: Users,
      timeframe: "2-5 minutes"
    },
    {
      step: 3,
      title: "Evacuate to High Ground",
      description: "Move perpendicular to the flow direction, reach elevation at least 30m above river level",
      icon: Navigation,
      timeframe: "5-15 minutes"
    },
    {
      step: 4,
      title: "Call Emergency Services",
      description: "Contact disaster management authorities and emergency services once in safe location",
      icon: Phone,
      timeframe: "Immediately after safety"
    }
  ];

  const preparednessChecklist = [
    {
      category: "Emergency Kit",
      items: [
        "72-hour supply of water (1 gallon per person per day)",
        "Non-perishable food for 3 days",
        "Battery-powered or hand-crank radio",
        "Flashlight and extra batteries",
        "First aid kit and medications",
        "Emergency blankets and warm clothing",
        "Important documents in waterproof container",
        "Cash and emergency contact list"
      ]
    },
    {
      category: "Communication Plan",
      items: [
        "Establish meeting points for family members",
        "Identify out-of-area contact person",
        "Program emergency numbers in all phones",
        "Learn local warning signals and evacuation routes",
        "Register for community alert systems",
        "Share plan with neighbors and local community",
        "Practice evacuation routes regularly",
        "Keep battery-powered radio for updates"
      ]
    },
    {
      category: "Home Preparation",
      items: [
        "Identify and clear evacuation routes from home",
        "Secure heavy furniture and objects",
        "Know location of gas, water, and electrical shutoffs",
        "Install battery backup for essential equipment",
        "Keep vehicles fueled and in good condition",
        "Waterproof important documents",
        "Create digital copies of important papers",
        "Install emergency lighting systems"
      ]
    }
  ];

  const riskLevels = {
    low: {
      color: "risk-safe",
      description: "Normal monitoring conditions",
      actions: ["Stay informed through official channels", "Maintain emergency preparedness", "Participate in community drills"],
      restrictions: []
    },
    moderate: {
      color: "risk-moderate", 
      description: "Increased monitoring and caution advised",
      actions: ["Check emergency kit supplies", "Review evacuation routes", "Stay alert to warnings", "Avoid unnecessary travel to risk areas"],
      restrictions: ["Limited access to high-risk zones", "Enhanced monitoring required"]
    },
    high: {
      color: "risk-high",
      description: "Immediate danger - evacuation recommended",
      actions: ["Evacuate immediately if instructed", "Move to designated safe areas", "Follow emergency services guidance", "Help vulnerable community members"],
      restrictions: ["No access to danger zones", "Mandatory evacuation may be ordered", "Emergency services priority access only"]
    }
  };

  const warningSigns = [
    {
      title: "Unusual Water Conditions",
      description: "Sudden water level changes, muddy water, or debris in streams",
      severity: "high",
      action: "Evacuate immediately"
    },
    {
      title: "Ground Movement",
      description: "Earthquakes, landslides, or ground vibrations",
      severity: "high", 
      action: "Move to safe location"
    },
    {
      title: "Strange Sounds",
      description: "Loud rumbling, roaring, or rushing water sounds",
      severity: "high",
      action: "Alert others and evacuate"
    },
    {
      title: "Animal Behavior",
      description: "Unusual animal behavior or mass animal movement",
      severity: "medium",
      action: "Stay alert and monitor"
    },
    {
      title: "Temperature Changes",
      description: "Sudden temperature increases in water sources",
      severity: "medium",
      action: "Report to authorities"
    },
    {
      title: "Infrastructure Damage",
      description: "Cracks in dams, unusual seepage, or structural damage",
      severity: "high",
      action: "Report immediately and evacuate"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold text-foreground">Emergency Safety Guide</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Comprehensive safety protocols and emergency preparedness for glacier lake outburst floods
          </p>
        </div>

        <Tabs defaultValue="emergency" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="emergency">Emergency Response</TabsTrigger>
            <TabsTrigger value="preparedness">Preparedness</TabsTrigger>
            <TabsTrigger value="warnings">Warning Signs</TabsTrigger>
            <TabsTrigger value="risk">Risk Levels</TabsTrigger>
          </TabsList>

          <TabsContent value="emergency" className="space-y-6">
            {/* Emergency Response Steps */}
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Zap className="h-6 w-6 text-destructive mr-2" />
                  Emergency Response Protocol
                </CardTitle>
                <CardDescription>
                  Critical steps to follow when GLOF warning is issued or signs are detected
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {emergencySteps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.step} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                            <Icon className="h-6 w-6 text-destructive" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="secondary" className="bg-destructive text-destructive-foreground">
                              Step {step.step}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {step.timeframe}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-2" />
                  Emergency Contact Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Disaster Management", number: "1077", priority: "high" },
                    { name: "Police Emergency", number: "100", priority: "high" },
                    { name: "Ambulance", number: "102", priority: "high" },
                    { name: "Fire Brigade", number: "101", priority: "medium" },
                    { name: "GLOF Alert Center", number: "1234", priority: "high" },
                    { name: "Local Emergency", number: "1144", priority: "medium" }
                  ].map((contact, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{contact.name}</span>
                        <Badge 
                          variant="secondary" 
                          className={contact.priority === "high" ? "bg-destructive text-destructive-foreground" : ""}
                        >
                          {contact.priority === "high" ? "Priority" : "Standard"}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold text-primary">{contact.number}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preparedness" className="space-y-6">
            {/* Preparedness Checklist */}
            {preparednessChecklist.map((category, index) => (
              <Card key={index} className="bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center">
                    {category.category === "Emergency Kit" && <Heart className="h-6 w-6 text-primary mr-2" />}
                    {category.category === "Communication Plan" && <Users className="h-6 w-6 text-primary mr-2" />}
                    {category.category === "Home Preparation" && <Home className="h-6 w-6 text-primary mr-2" />}
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-risk-safe mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="warnings" className="space-y-6">
            {/* Warning Signs */}
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <AlertTriangle className="h-6 w-6 text-destructive mr-2" />
                  GLOF Warning Signs
                </CardTitle>
                <CardDescription>
                  Learn to recognize these critical warning signs that may indicate an impending GLOF
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {warningSigns.map((warning, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-foreground">{warning.title}</h3>
                        <Badge 
                          variant="secondary" 
                          className={warning.severity === "high" ? 
                            "bg-destructive text-destructive-foreground" : 
                            "bg-risk-moderate text-risk-moderate-foreground"
                          }
                        >
                          {warning.severity.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{warning.description}</p>
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{warning.action}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risk" className="space-y-6">
            {/* Risk Level Selector */}
            <div className="flex space-x-2 mb-6">
              {Object.entries(riskLevels).map(([level, data]) => (
                <Button
                  key={level}
                  variant={selectedRiskLevel === level ? "default" : "outline"}
                  onClick={() => setSelectedRiskLevel(level)}
                  className={selectedRiskLevel === level ? `bg-${data.color} text-${data.color}-foreground` : ""}
                >
                  {level.toUpperCase()} RISK
                </Button>
              ))}
            </div>

            {/* Risk Level Details */}
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <div className={`w-4 h-4 rounded-full bg-${riskLevels[selectedRiskLevel].color} mr-3`}></div>
                  {selectedRiskLevel.toUpperCase()} Risk Level
                </CardTitle>
                <CardDescription>
                  {riskLevels[selectedRiskLevel].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Recommended Actions:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {riskLevels[selectedRiskLevel].actions.map((action, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-risk-safe mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {riskLevels[selectedRiskLevel].restrictions.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Current Restrictions:</h3>
                    <div className="space-y-2">
                      {riskLevels[selectedRiskLevel].restrictions.map((restriction, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{restriction}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Action Card */}
        <div className="mt-8">
          <Card className="bg-gradient-emergency border-destructive">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="h-12 w-12 text-destructive-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-destructive-foreground mb-2">
                Emergency Situation?
              </h3>
              <p className="text-destructive-foreground/90 mb-6">
                If you are experiencing a GLOF emergency, take immediate action
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="destructive" size="lg" className="bg-destructive-foreground text-destructive">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Emergency: 1077
                </Button>
                <Button variant="outline" size="lg" className="border-destructive-foreground text-destructive-foreground">
                  <MapPin className="h-5 w-5 mr-2" />
                  Find Safe Location
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Safety;