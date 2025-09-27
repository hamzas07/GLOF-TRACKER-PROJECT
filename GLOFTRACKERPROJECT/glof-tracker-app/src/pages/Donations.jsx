import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Target, 
  Users, 
  DollarSign, 
  Clock,
  MapPin,
  Zap,
  Shield,
  Home,
  Utensils,
  Droplets,
  Building
} from "lucide-react";

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);

  const campaigns = [
    {
      title: "Emergency Shelter for Displaced Families",
      description: "Providing immediate shelter and basic necessities for families displaced by recent GLOF events in Langtang region",
      location: "Langtang Valley, Nepal",
      target: 75000,
      raised: 62500,
      donors: 324,
      daysLeft: 12,
      urgency: "high",
      category: "Emergency Relief",
      image: "🏠",
      beneficiaries: 150
    },
    {
      title: "Early Warning System Installation",
      description: "Installing advanced monitoring equipment and alert systems in vulnerable mountain communities",
      location: "Everest Region, Nepal",
      target: 120000,
      raised: 89000,
      donors: 156,
      daysLeft: 28,
      urgency: "medium",
      category: "Prevention",
      image: "📡",
      beneficiaries: 500
    },
    {
      title: "Community Preparedness Training",
      description: "Training local communities in disaster preparedness, evacuation procedures, and emergency response",
      location: "Annapurna Region, Nepal",
      target: 35000,
      raised: 28000,
      donors: 89,
      daysLeft: 45,
      urgency: "low",
      category: "Education",
      image: "🎓",
      beneficiaries: 200
    },
    {
      title: "Medical Aid & Supplies",
      description: "Emergency medical supplies and healthcare support for communities at high risk of glacier disasters",
      location: "Multiple Locations",
      target: 50000,
      raised: 31000,
      donors: 178,
      daysLeft: 20,
      urgency: "high",
      category: "Healthcare",
      image: "🏥",
      beneficiaries: 300
    },
    {
      title: "Safe Water Infrastructure",
      description: "Building resilient water systems and safe drinking water facilities in disaster-prone areas",
      location: "Manaslu Region, Nepal",
      target: 95000,
      raised: 42000,
      donors: 67,
      daysLeft: 60,
      urgency: "medium",
      category: "Infrastructure",
      image: "💧",
      beneficiaries: 400
    },
    {
      title: "Food Security Program",
      description: "Ensuring food security and nutrition support for vulnerable communities in glacier risk zones",
      location: "Himalayan Regions",
      target: 65000,
      raised: 58000,
      donors: 203,
      daysLeft: 8,
      urgency: "high",
      category: "Food Security",
      image: "🍎",
      beneficiaries: 250
    }
  ];

  const quickDonationAmounts = [25, 50, 100, 250, 500, 1000];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "high": return "destructive";
      case "medium": return "risk-moderate";
      case "low": return "risk-safe";
      default: return "secondary";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Emergency Relief": return Home;
      case "Prevention": return Shield;
      case "Education": return Users;
      case "Healthcare": return Heart;
      case "Infrastructure": return Building;
      case "Food Security": return Utensils;
      default: return Heart;
    }
  };

  const handleDonate = (campaignTitle, amount) => {
    console.log(`Donating $${amount} to: ${campaignTitle}`);
    // Placeholder for payment integration
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Heart className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold text-foreground">Support & Donations</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Help communities at risk of glacier disasters. Your support saves lives and builds resilience.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-card text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-foreground">$1.2M</div>
              <div className="text-sm text-muted-foreground">Total Raised</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-foreground">2,847</div>
              <div className="text-sm text-muted-foreground">Donors</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-foreground">1,650</div>
              <div className="text-sm text-muted-foreground">People Helped</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-foreground">24</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </CardContent>
          </Card>
        </div>

        {/* Campaign Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Emergency Relief", "Prevention", "Education", "Healthcare", "Infrastructure"].map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Active Campaigns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => {
            const CategoryIcon = getCategoryIcon(campaign.category);
            const progressPercentage = (campaign.raised / campaign.target) * 100;
            
            return (
              <Card key={index} className="bg-gradient-card hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-4xl">{campaign.image}</div>
                    <Badge 
                      variant="secondary" 
                      className={`bg-${getUrgencyColor(campaign.urgency)} text-${getUrgencyColor(campaign.urgency)}-foreground`}
                    >
                      {campaign.urgency.toUpperCase()}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg text-foreground">{campaign.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {campaign.description}
                  </CardDescription>
                  
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{campaign.location}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-foreground">
                        ${campaign.raised.toLocaleString()} raised
                      </span>
                      <span className="text-muted-foreground">
                        ${campaign.target.toLocaleString()} goal
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">
                      {progressPercentage.toFixed(1)}% complete
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm font-medium text-foreground">{campaign.donors}</div>
                      <div className="text-xs text-muted-foreground">Donors</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm font-medium text-foreground">{campaign.daysLeft}</div>
                      <div className="text-xs text-muted-foreground">Days Left</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Heart className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm font-medium text-foreground">{campaign.beneficiaries}</div>
                      <div className="text-xs text-muted-foreground">People</div>
                    </div>
                  </div>

                  {/* Quick Donation */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      {quickDonationAmounts.slice(0, 3).map((amount) => (
                        <Button
                          key={amount}
                          variant={selectedAmount === amount ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedAmount(amount)}
                          className="text-xs"
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Input
                        type="number"
                        placeholder="Custom amount"
                        value={selectedAmount}
                        onChange={(e) => setSelectedAmount(Number(e.target.value))}
                        className="flex-1"
                      />
                      <Button 
                        variant="hero"
                        onClick={() => handleDonate(campaign.title, selectedAmount)}
                      >
                        <DollarSign className="h-4 w-4 mr-1" />
                        Donate
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="flex items-center justify-between pt-2">
                    <Badge variant="outline" className="flex items-center space-x-1">
                      <CategoryIcon className="h-3 w-3" />
                      <span className="text-xs">{campaign.category}</span>
                    </Badge>
                    <Button variant="ghost" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Start Your Own Campaign */}
        <div className="mt-12">
          <Card className="bg-gradient-card max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Start Your Own Campaign
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Have a project or initiative that needs funding? Create your own fundraising campaign 
                  and connect with donors who care about glacier disaster prevention.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <Zap className="h-5 w-5 mr-2" />
                  Start Campaign
                </Button>
                <Button variant="outline" size="lg">
                  Learn How It Works
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Donations;
