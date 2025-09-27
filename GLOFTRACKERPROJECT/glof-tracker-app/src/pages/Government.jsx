import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Building, 
  Calendar, 
  Download, 
  ExternalLink,
  Search,
  Bell,
  Shield,
  Users,
  TrendingUp,
  Award,
  DollarSign
} from "lucide-react";

const Government = () => {
  const resources = [
    {
      title: "National GLOF Risk Assessment Report 2024",
      description: "Comprehensive analysis of glacier lake outburst flood risks across all major mountain regions",
      type: "Report",
      date: "2024-03-15",
      agency: "Department of Hydrology and Meteorology",
      status: "Published",
      downloads: 2847,
      category: "research"
    },
    {
      title: "Emergency Response Protocol Guidelines",
      description: "Standard operating procedures for GLOF emergency response and evacuation planning",
      type: "Guidelines",
      date: "2024-02-28",
      agency: "National Disaster Risk Reduction Authority",
      status: "Updated",
      downloads: 1523,
      category: "emergency"
    },
    {
      title: "Community Preparedness Grant Program",
      description: "Funding opportunities for local communities to implement GLOF prevention measures",
      type: "Funding",
      date: "2024-04-01",
      agency: "Ministry of Home Affairs",
      status: "Active",
      downloads: 956,
      category: "funding"
    },
    {
      title: "Glacier Monitoring Network Expansion Plan",
      description: "Strategic plan for expanding real-time glacier monitoring infrastructure nationwide",
      type: "Policy",
      date: "2024-01-10",
      agency: "Department of Environment",
      status: "Approved",
      downloads: 734,
      category: "policy"
    },
    {
      title: "Building Codes for High-Risk Areas",
      description: "Updated construction standards and building codes for glacier disaster-prone regions",
      type: "Regulation",
      date: "2024-03-20",
      agency: "Ministry of Urban Development",
      status: "Enforced",
      downloads: 1856,
      category: "regulation"
    },
    {
      title: "Climate Adaptation Budget Allocation 2024",
      description: "Government budget allocation for climate adaptation and disaster risk reduction programs",
      type: "Budget",
      date: "2024-04-15",
      agency: "Ministry of Finance",
      status: "Approved",
      downloads: 623,
      category: "budget"
    }
  ];

  const news = [
    {
      title: "Government Launches Advanced GLOF Early Warning System",
      date: "2024-04-18",
      summary: "New state-of-the-art monitoring system deployed across 50 high-risk glacier lakes",
      agency: "Prime Minister's Office",
      urgent: true
    },
    {
      title: "International Climate Fund Approves $50M for Nepal GLOF Prevention",
      date: "2024-04-16",
      summary: "Major funding secured for community resilience and infrastructure projects",
      agency: "Ministry of Finance",
      urgent: false
    },
    {
      title: "New Emergency Response Training Centers Inaugurated",
      date: "2024-04-14",
      summary: "Five regional training facilities now operational for disaster preparedness education",
      agency: "National Emergency Management",
      urgent: false
    },
    {
      title: "Updated GLOF Risk Maps Released for Public Access",
      date: "2024-04-12",
      summary: "High-resolution risk mapping data now available for all stakeholders",
      agency: "Survey Department",
      urgent: false
    }
  ];

  const schemes = [
    {
      title: "Mountain Community Resilience Scheme",
      description: "Financial assistance for disaster-resistant infrastructure development",
      eligibility: "Mountain communities in high-risk zones",
      amount: "Up to NPR 2,000,000",
      deadline: "2024-06-30",
      status: "Open"
    },
    {
      title: "GLOF Insurance Subsidy Program",
      description: "Government subsidy for disaster insurance premiums",
      eligibility: "Households in glacier risk areas",
      amount: "70% premium subsidy",
      deadline: "2024-05-15",
      status: "Open"
    },
    {
      title: "Emergency Shelter Construction Grant",
      description: "Funding for community emergency shelter facilities",
      eligibility: "Local government bodies",
      amount: "NPR 5,000,000 - 20,000,000",
      deadline: "2024-07-31",
      status: "Open"
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "research": return FileText;
      case "emergency": return Shield;
      case "funding": return DollarSign;
      case "policy": return Building;
      case "regulation": return Shield;
      case "budget": return TrendingUp;
      default: return FileText;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "research": return "primary";
      case "emergency": return "destructive";
      case "funding": return "risk-moderate";
      case "policy": return "secondary";
      case "regulation": return "risk-safe";
      case "budget": return "accent";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Building className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold text-foreground">Government Resources</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Access official documents, policies, news updates, and government schemes related to glacier disaster management
          </p>
          
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search government resources..."
              className="pl-10 bg-input/50"
            />
          </div>
        </div>

        {/* Latest News & Announcements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
            <Bell className="h-6 w-6 text-primary mr-2" />
            Latest News & Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {news.map((item, index) => (
              <Card key={index} className={`bg-gradient-card ${item.urgent ? 'border-destructive' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-foreground pr-4">{item.title}</CardTitle>
                    {item.urgent && (
                      <Badge variant="secondary" className="bg-destructive text-destructive-foreground">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.date}</span>
                    <span className="mx-2">•</span>
                    <span>{item.agency}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.summary}</p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Full Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Government Schemes & Benefits */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
            <Award className="h-6 w-6 text-primary mr-2" />
            Active Schemes & Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schemes.map((scheme, index) => (
              <Card key={index} className="bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{scheme.title}</CardTitle>
                  <CardDescription>{scheme.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-foreground">Eligibility:</div>
                    <div className="text-sm text-muted-foreground">{scheme.eligibility}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Financial Support:</div>
                    <div className="text-sm text-muted-foreground">{scheme.amount}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Application Deadline:</div>
                    <div className="text-sm text-muted-foreground">{scheme.deadline}</div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <Badge variant="secondary" className="bg-risk-safe text-risk-safe-foreground">
                      {scheme.status}
                    </Badge>
                    <Button variant="hero" size="sm">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Official Documents & Resources */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
            <FileText className="h-6 w-6 text-primary mr-2" />
            Official Documents & Resources
          </h2>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["All", "Reports", "Guidelines", "Policies", "Regulations", "Funding"].map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const CategoryIcon = getCategoryIcon(resource.category);
              return (
                <Card key={index} className="bg-gradient-card hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <CategoryIcon className="h-4 w-4 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs bg-${getCategoryColor(resource.category)} text-${getCategoryColor(resource.category)}-foreground`}
                      >
                        {resource.status}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-lg text-foreground">{resource.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Building className="h-4 w-4 mr-2" />
                        <span>{resource.agency}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{resource.date}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Download className="h-4 w-4 mr-2" />
                        <span>{resource.downloads} downloads</span>
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button variant="default" size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
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
        </section>

        {/* Contact Government */}
        <div className="mt-12">
          <Card className="bg-gradient-card max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Contact Government Agencies
              </h3>
              <p className="text-muted-foreground mb-6">
                Need to reach out to specific government departments for GLOF-related inquiries or support?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <Users className="h-5 w-5 mr-2" />
                  Agency Directory
                </Button>
                <Button variant="outline" size="lg">
                  Submit Query
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Government;