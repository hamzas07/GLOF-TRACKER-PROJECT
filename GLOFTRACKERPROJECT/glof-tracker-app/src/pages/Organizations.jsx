import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
  Search,
  ExternalLink,
  Heart,
  Shield,
  Truck,
  Building
} from "lucide-react";

const Organizations = () => {
  const organizations = [
    {
      name: "Himalayan Disaster Relief Fund",
      type: "NGO",
      description: "Specialized in mountain disaster response and community preparedness training",
      location: "Kathmandu, Nepal",
      contact: "+977-1-4567890",
      email: "contact@hdrf.org",
      website: "www.hdrf.org",
      services: ["Emergency Response", "Community Training", "Equipment Supply"],
      verified: true,
      category: "disaster"
    },
    {
      name: "Mountain Communities Alliance",
      type: "International NGO",
      description: "Supporting vulnerable mountain communities with disaster preparedness and climate adaptation",
      location: "Multiple Locations",
      contact: "+1-555-123456",
      email: "help@mountainalliance.org",
      website: "www.mountainalliance.org",
      services: ["Capacity Building", "Early Warning", "Infrastructure"],
      verified: true,
      category: "community"
    },
    {
      name: "Glacier Research Institute",
      type: "Research Organization",
      description: "Leading research on glacier dynamics and GLOF risk assessment in the Himalayas",
      location: "Pokhara, Nepal",
      contact: "+977-61-123456",
      email: "research@gri.edu.np",
      website: "www.gri.edu.np",
      services: ["Research", "Risk Assessment", "Technical Consultation"],
      verified: true,
      category: "research"
    },
    {
      name: "Emergency Response Nepal",
      type: "Emergency Service",
      description: "24/7 emergency response coordination for natural disasters including GLOFs",
      location: "Nationwide Coverage",
      contact: "1077",
      email: "emergency@ern.gov.np",
      website: "www.ern.gov.np",
      services: ["Emergency Response", "Rescue Operations", "Medical Aid"],
      verified: true,
      category: "emergency"
    },
    {
      name: "Climate Adaptation Fund",
      type: "Funding Organization",
      description: "Providing financial support for climate adaptation and disaster risk reduction projects",
      location: "International",
      contact: "+44-20-12345678",
      email: "grants@caf.org",
      website: "www.caf.org",
      services: ["Funding", "Grant Management", "Technical Support"],
      verified: true,
      category: "funding"
    },
    {
      name: "Local Community Networks",
      type: "Community Group",
      description: "Grassroots organizations working directly with at-risk communities",
      location: "Rural Mountain Areas",
      contact: "+977-9841234567",
      email: "connect@lcn.org.np",
      website: "www.lcn.org.np",
      services: ["Community Mobilization", "Local Response", "Awareness"],
      verified: true,
      category: "community"
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "disaster": return Shield;
      case "emergency": return Truck;
      case "research": return Building;
      case "community": return Users;
      case "funding": return Heart;
      default: return Building;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "disaster": return "destructive";
      case "emergency": return "risk-high";
      case "research": return "primary";
      case "community": return "risk-safe";
      case "funding": return "risk-moderate";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold text-foreground">Partner Organizations</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Connect with NGOs, government agencies, and community organizations working on glacier disaster prevention
          </p>
          
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search organizations..."
              className="pl-10 bg-input/50"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Emergency", "Research", "Community", "Funding", "Disaster"].map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizations.map((org, index) => {
            const CategoryIcon = getCategoryIcon(org.category);
            return (
              <Card key={index} className="bg-gradient-card hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <CategoryIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-foreground">{org.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {org.type}
                          </Badge>
                          {org.verified && (
                            <Badge variant="secondary" className="text-xs bg-risk-safe text-risk-safe-foreground">
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {org.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Contact Information */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{org.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{org.contact}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{org.email}</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-1">
                      {org.services.map((service, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button variant="default" size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Register Your Organization
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our network of organizations working to prevent glacier disaster impacts. 
                Get listed and connect with other stakeholders in the GLOF prevention ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <Building className="h-5 w-5 mr-2" />
                  Register Organization
                </Button>
                <Button variant="outline" size="lg">
                  <Users className="h-5 w-5 mr-2" />
                  Join Network
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Organizations;