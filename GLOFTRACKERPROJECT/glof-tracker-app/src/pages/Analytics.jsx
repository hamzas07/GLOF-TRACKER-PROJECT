import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from "recharts";
import { 
  TrendingUp, 
  AlertTriangle, 
  Activity, 
  Eye,
  Thermometer,
  Droplets,
  Mountain,
  BarChart3
} from "lucide-react";

// Dummy data for charts
const glacierLakeData = [
  { month: "Jan", volume: 850000, risk: 2 },
  { month: "Feb", volume: 820000, risk: 2 },
  { month: "Mar", volume: 890000, risk: 3 },
  { month: "Apr", volume: 950000, risk: 4 },
  { month: "May", volume: 1200000, risk: 6 },
  { month: "Jun", volume: 1450000, risk: 7 },
  { month: "Jul", volume: 1600000, risk: 8 },
  { month: "Aug", volume: 1580000, risk: 7 },
  { month: "Sep", volume: 1420000, risk: 6 },
  { month: "Oct", volume: 1150000, risk: 4 },
  { month: "Nov", volume: 980000, risk: 3 },
  { month: "Dec", volume: 900000, risk: 2 }
];

const temperatureData = [
  { day: "Mon", temp: -2, glacierMelt: 120 },
  { day: "Tue", temp: 1, glacierMelt: 180 },
  { day: "Wed", temp: 3, glacierMelt: 250 },
  { day: "Thu", temp: 2, glacierMelt: 200 },
  { day: "Fri", temp: 4, glacierMelt: 320 },
  { day: "Sat", temp: 6, glacierMelt: 450 },
  { day: "Sun", temp: 5, glacierMelt: 380 }
];

const riskDistribution = [
  { name: "Safe", value: 45, color: "#10b981" },
  { name: "Moderate", value: 35, color: "#f59e0b" },
  { name: "High", value: 15, color: "#ef4444" },
  { name: "Critical", value: 5, color: "#dc2626" }
];

const monitoringStations = [
  { region: "Everest", stations: 12, alerts: 3 },
  { region: "Annapurna", stations: 8, alerts: 1 },
  { region: "Langtang", stations: 6, alerts: 2 },
  { region: "Kanchenjunga", stations: 4, alerts: 0 },
  { region: "Manaslu", stations: 5, alerts: 1 }
];

const Analytics = () => {
  const stats = [
    {
      title: "Total Glacier Lakes Monitored",
      value: "1,247",
      change: "+12 this month",
      icon: Mountain,
      trend: "up"
    },
    {
      title: "Active Monitoring Stations",
      value: "89",
      change: "+3 new installations",
      icon: Activity,
      trend: "up"
    },
    {
      title: "High Risk Lakes",
      value: "23",
      change: "+2 upgraded status",
      icon: AlertTriangle,
      trend: "up"
    },
    {
      title: "Average Temperature Rise",
      value: "+2.3°C",
      change: "vs. last decade",
      icon: Thermometer,
      trend: "up"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold text-foreground">GLOF Analytics Dashboard</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Comprehensive data analysis and monitoring insights for glacier lake outburst flood prevention
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-gradient-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <TrendingUp className="h-4 w-4 text-risk-safe mr-1" />
                    {stat.change}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Glacier Lake Volume Trends */}
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-foreground">Glacier Lake Volume Trends</CardTitle>
              <CardDescription>Monthly volume changes and risk assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={glacierLakeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      color: "hsl(var(--foreground))"
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="volume" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Risk Distribution */}
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-foreground">Risk Level Distribution</CardTitle>
              <CardDescription>Current risk status across all monitored lakes</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={riskDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {riskDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      color: "hsl(var(--foreground))"
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Temperature and Glacier Melt */}
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-foreground">Temperature vs Glacier Melt</CardTitle>
              <CardDescription>Weekly correlation between temperature and ice melt rates</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      color: "hsl(var(--foreground))"
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="temp" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth={2}
                    name="Temperature (°C)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="glacierMelt" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    name="Glacier Melt (m³/day)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Monitoring Stations by Region */}
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-foreground">Regional Monitoring Coverage</CardTitle>
              <CardDescription>Active stations and recent alerts by region</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monitoringStations}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      color: "hsl(var(--foreground))"
                    }} 
                  />
                  <Bar dataKey="stations" fill="hsl(var(--primary))" name="Stations" />
                  <Bar dataKey="alerts" fill="hsl(var(--destructive))" name="Recent Alerts" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Eye className="h-5 w-5 text-primary mr-2" />
                Satellite Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-2">94.7%</div>
              <p className="text-muted-foreground">of high-risk areas monitored</p>
              <Badge variant="secondary" className="mt-2">
                24/7 monitoring active
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Droplets className="h-5 w-5 text-primary mr-2" />
                Water Volume
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-2">2.4B m³</div>
              <p className="text-muted-foreground">total monitored water volume</p>
              <Badge variant="secondary" className="mt-2">
                +8.2% from last year
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <AlertTriangle className="h-5 w-5 text-destructive mr-2" />
                Alert Response
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-2">4.2 min</div>
              <p className="text-muted-foreground">average emergency response time</p>
              <Badge variant="secondary" className="mt-2">
                98.5% success rate
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;