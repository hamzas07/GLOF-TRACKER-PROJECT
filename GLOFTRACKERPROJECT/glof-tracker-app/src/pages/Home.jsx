import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-glacier.jpg";
import {
  MapPin,
  Thermometer,
  Cloud,
  AlertTriangle,
  Monitor,
  BookOpen,
  BarChart3,
  Users,
  Heart,
  FileText,
  Shield,
  Phone,
  Brain,
  Satellite,
  Activity,
  Globe,
  Zap,
  Bell
} from "lucide-react";

// Dummy location data
const mockLocationData = {
  name: "Kathmandu Valley",
  temperature: "18°C",
  weather: "Partly Cloudy",
  humidity: "65%",
  windSpeed: "12 km/h",
  riskLevel: "moderate",
  lastUpdated: new Date().toLocaleTimeString(),
  glacierLakes: 12,
  monitoringStations: 8
};

const getRiskColor = (level) => {
  switch (level) {
    case "safe": return "risk-safe";
    case "moderate": return "risk-moderate";
    case "high": return "risk-high";
    default: return "risk-moderate";
  }
};

const Home = () => {
  const [locationData, setLocationData] = useState(mockLocationData);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Live Dashboard",
      description: "Real-time monitoring of glacier lakes and GLOF risk assessment",
      icon: Monitor,
      href: "/dashboard",
      color: "primary"
    },
    {
      title: "Analytics Center",
      description: "Comprehensive data analysis and trend monitoring",
      icon: BarChart3,
      href: "/analytics",
      color: "secondary"
    },
    {
      title: "Emergency Services",
      description: "Direct access to disaster management and emergency contacts",
      icon: Phone,
      href: "/emergency",
      color: "emergency"
    },
    {
      title: "AI Assistant",
      description: "Intelligent chatbot for guidance and emergency support",
      icon: Brain,
      href: "/chatbot",
      color: "default"
    },
    {
      title: "Organizations",
      description: "Connect with NGOs and support organizations",
      icon: Users,
      href: "/organizations",
      color: "default"
    },
    {
      title: "Donations",
      description: "Support communities affected by glacier disasters",
      icon: Heart,
      href: "/donations",
      color: "default"
    }
  ];

  const additionalFeatures = [
    {
      title: "Satellite Monitoring",
      description: "Real-time satellite imagery analysis",
      icon: Satellite
    },
    {
      title: "Early Warning System",
      description: "Advanced alert mechanisms for communities",
      icon: Bell
    },
    {
      title: "Risk Assessment",
      description: "AI-powered glacier lake danger evaluation",
      icon: Activity
    },
    {
      title: "Global Network",
      description: "Connected monitoring across mountain regions",
      icon: Globe
    },
    {
      title: "Rapid Response",
      description: "Coordinated emergency response protocols",
      icon: Zap
    },
    {
      title: "Community Alerts",
      description: "Localized warning system for residents",
      icon: AlertTriangle
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/90" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <Badge variant="secondary" className="text-sm px-4 py-2 mb-4">
              <Activity className="h-4 w-4 mr-2" />
              Live Monitoring Active
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            GLOF Early Warning
            <span className="block text-4xl md:text-6xl bg-gradient-primary bg-clip-text text-transparent">
              Protection System
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Advanced glacier lake monitoring and emergency response system protecting communities from outburst floods
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <Button variant="hero" size="xl" className="min-w-[200px]">
                <Monitor className="h-5 w-5 mr-2" />
                Live Dashboard
              </Button>
            </Link>
            <Link to="/safety">
              <Button variant="glass" size="xl" className="min-w-[200px]">
                <BookOpen className="h-5 w-5 mr-2" />
                Emergency Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Real-time Status Panel */}
      <section className="py-8 bg-card/50">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                Current Location Status
              </h3>
              <Badge 
                variant="secondary" 
                className={`bg-${getRiskColor(locationData.riskLevel)} text-${getRiskColor(locationData.riskLevel)}-foreground`}
              >
                {locationData.riskLevel.toUpperCase()} RISK
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold text-foreground">{locationData.name}</p>
              </div>
              <div className="text-center">
                <Thermometer className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Temperature</p>
                <p className="font-semibold text-foreground">{locationData.temperature}</p>
              </div>
              <div className="text-center">
                <Cloud className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Weather</p>
                <p className="font-semibold text-foreground">{locationData.weather}</p>
              </div>
              <div className="text-center">
                <Activity className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Glacier Lakes</p>
                <p className="font-semibold text-foreground">{locationData.glacierLakes}</p>
              </div>
              <div className="text-center">
                <Monitor className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Stations</p>
                <p className="font-semibold text-foreground">{locationData.monitoringStations}</p>
              </div>
              <div className="text-center">
                <Bell className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Last Update</p>
                <p className="font-semibold text-foreground">{locationData.lastUpdated}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive GLOF Protection Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced monitoring, emergency response, and community support systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 bg-gradient-card hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <Link to={service.href}>
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Advanced Protection Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Cutting-edge technology for glacier monitoring and disaster prevention
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Stay Protected?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our monitoring network and receive real-time glacier lake alerts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button variant="hero" size="lg">
                Start Monitoring
              </Button>
            </Link>
            <Link to="/emergency">
              <Button variant="emergency" size="lg">
                Emergency Contacts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;