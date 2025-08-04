import { z } from "zod"

// Knowledge base schema
export const knowledgeQuerySchema = z.object({
  question: z.string().min(1, "Question is required")
})

// TypeScript interfaces for type safety
interface TeamMember {
  name: string
  role: string
  experience: string
  specialties: string[]
  education: string
  certifications: string[]
}

interface Service {
  name: string
  description: string
  pricing: string
  details: {
    features: string[]
    technologies: string[]
    [key: string]: any
  }
}

interface CompanyData {
  company: {
    name: string
    founded: string
    location: string
    employees: string
    description: string
    mission: string
    vision: string
    values: string[]
    certifications: string[]
    awards: string[]
  }
  services: Service[]
  team: TeamMember[]
  technologies: string[]
  projects: Array<{
    name: string
    client: string
    duration: string
    scope: string
    technologies: string[]
    outcome: string
  }>
  contact: {
    email: string
    phone: string
    address: string
    business_hours: string
    emergency: string
    support_email: string
    sales_email: string
    careers_email: string
  }
  pricing: {
    cloud_migration: {
      small: string
      medium: string
      large: string
    }
    security_audit: {
      basic: string
      comprehensive: string
      enterprise: string
    }
    monthly_support: {
      basic: string
      standard: string
      premium: string
    }
  }
  locations: {
    [key: string]: {
      city: string
      address: string
      staff: number
      services: string[]
    }
  }
  partnerships: Array<{
    name: string
    level: string
    since: string
    specialties: string[]
  }>
}

// Expanded mock company data with proper typing
const COMPANY_DATA: CompanyData = {
  company: {
    name: "LOU IT",
    founded: "2020",
    location: "Sydney, Australia",
    employees: "25-50",
    description: "A modern IT solutions company specializing in cloud infrastructure, cybersecurity, and digital transformation.",
    mission: "To empower businesses through innovative technology solutions and exceptional service.",
    vision: "To be Australia's most trusted IT partner, driving digital innovation across all industries.",
    values: ["Innovation", "Reliability", "Security", "Customer Success", "Continuous Learning"],
    certifications: ["ISO 27001", "AWS Partner", "Microsoft Gold Partner", "Google Cloud Partner"],
    awards: ["Best IT Services Company 2023", "Cybersecurity Excellence Award 2024"]
  },
  services: [
    {
      name: "Cloud Infrastructure",
      description: "AWS, Azure, and Google Cloud setup and management",
      pricing: "Starting from $2,500/month",
      details: {
        features: ["Cloud migration", "Auto-scaling", "Load balancing", "Disaster recovery", "Cost optimization"],
        technologies: ["AWS EC2", "Azure VMs", "Google Compute Engine", "Kubernetes", "Docker"],
        sla: "99.9% uptime guarantee",
        support: "24/7 monitoring and support"
      }
    },
    {
      name: "Cybersecurity",
      description: "Complete security audits, monitoring, and threat response",
      pricing: "Starting from $3,000/month",
      details: {
        features: ["Penetration testing", "SIEM implementation", "Incident response", "Compliance audits", "Security training"],
        technologies: ["Splunk", "CrowdStrike", "Fortinet", "Palo Alto Networks", "Rapid7"],
        certifications: ["CISSP", "CEH", "CISA", "CISM"],
        compliance: ["GDPR", "SOC 2", "PCI DSS", "HIPAA"]
      }
    },
    {
      name: "Digital Transformation",
      description: "Legacy system modernization and workflow automation",
      pricing: "Project-based, starting from $15,000",
      details: {
        features: ["Legacy system migration", "Process automation", "API development", "Data analytics", "Mobile app development"],
        technologies: ["React", "Node.js", "Python", "Power BI", "Salesforce", "Microsoft 365"],
        methodology: "Agile development with 2-week sprints",
        timeline: "Typical projects: 3-12 months"
      }
    },
    {
      name: "IT Support",
      description: "24/7 helpdesk and on-site technical support",
      pricing: "Starting from $150/hour",
      details: {
        features: ["Remote desktop support", "On-site visits", "Hardware maintenance", "Software troubleshooting", "User training"],
        technologies: ["TeamViewer", "Microsoft Remote Desktop", "ServiceNow", "Jira Service Management", "Slack"],
        response_times: "Critical: 1 hour, High: 4 hours, Medium: 24 hours, Low: 72 hours",
        coverage: "24/7/365 for critical issues",
        locations: "Sydney, Melbourne, Brisbane metro areas"
      }
    }
  ],
  team: [
    {
      name: "Lou Chen",
      role: "CEO & Founder",
      experience: "15+ years in enterprise IT",
      specialties: ["Cloud Architecture", "Business Strategy"],
      education: "Master of IT, University of Sydney",
      certifications: ["AWS Solutions Architect Professional", "CISSP"]
    },
    {
      name: "Sarah Martinez",
      role: "CTO",
      experience: "12+ years in cybersecurity",
      specialties: ["Security Architecture", "Compliance"],
      education: "Bachelor of Computer Science, UNSW",
      certifications: ["CISSP", "CISM", "CEH"]
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      experience: "8+ years in full-stack development",
      specialties: ["React", "Node.js", "DevOps"],
      education: "Bachelor of Software Engineering, UTS",
      certifications: ["AWS Developer Associate", "Google Cloud Professional"]
    },
    {
      name: "Emma Wilson",
      role: "Cloud Solutions Architect",
      experience: "10+ years in cloud infrastructure",
      specialties: ["AWS", "Azure", "Kubernetes"],
      education: "Master of Cloud Computing, Macquarie University",
      certifications: ["AWS Solutions Architect Professional", "Azure Solutions Architect Expert"]
    },
    {
      name: "James Thompson",
      role: "Security Analyst",
      experience: "6+ years in cybersecurity",
      specialties: ["Penetration Testing", "Incident Response"],
      education: "Bachelor of Cybersecurity, Griffith University",
      certifications: ["CEH", "GCIH", "OSCP"]
    }
  ],
  technologies: [
    "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker",
    "React", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "Terraform", "Ansible", "Jenkins", "GitLab", "Prometheus",
    "Splunk", "CrowdStrike", "Fortinet", "Palo Alto Networks",
    "Microsoft 365", "Salesforce", "Power BI", "Tableau"
  ],
  projects: [
    {
      name: "Healthcare Cloud Migration",
      client: "Major Australian Hospital",
      duration: "8 months",
      scope: "Migrated entire IT infrastructure to AWS, implemented HIPAA compliance",
      technologies: ["AWS", "Docker", "Kubernetes", "PostgreSQL"],
      outcome: "40% cost reduction, 99.9% uptime"
    },
    {
      name: "Banking Security Overhaul",
      client: "Regional Bank",
      duration: "12 months",
      scope: "Complete cybersecurity implementation including SIEM, threat monitoring",
      technologies: ["Splunk", "CrowdStrike", "Fortinet"],
      outcome: "Zero security incidents, PCI DSS compliance achieved"
    },
    {
      name: "Retail Digital Transformation",
      client: "National Retail Chain",
      duration: "6 months",
      scope: "E-commerce platform development, inventory management system",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      outcome: "300% increase in online sales, 50% reduction in inventory costs"
    }
  ],
  contact: {
    email: "hello@louit.com.au",
    phone: "+61 2 8234 5678",
    address: "Level 12, 456 George Street, Sydney NSW 2000",
    business_hours: "Monday-Friday 9:00 AM - 6:00 PM AEST",
    emergency: "+61 2 8234 5679",
    support_email: "support@louit.com.au",
    sales_email: "sales@louit.com.au",
    careers_email: "careers@louit.com.au"
  },
  pricing: {
    cloud_migration: {
      small: "$15,000 - $50,000",
      medium: "$50,000 - $150,000", 
      large: "$150,000 - $500,000"
    },
    security_audit: {
      basic: "$5,000 - $15,000",
      comprehensive: "$15,000 - $50,000",
      enterprise: "$50,000+"
    },
    monthly_support: {
      basic: "$2,500/month (up to 50 users)",
      standard: "$5,000/month (up to 200 users)",
      premium: "$10,000/month (unlimited users)"
    }
  },
  locations: {
    headquarters: {
      city: "Sydney",
      address: "Level 12, 456 George Street, Sydney NSW 2000",
      staff: 35,
      services: ["All services", "Headquarters operations"]
    },
    melbourne: {
      city: "Melbourne",
      address: "Level 8, 123 Collins Street, Melbourne VIC 3000",
      staff: 12,
      services: ["IT Support", "Cybersecurity", "On-site services"]
    },
    brisbane: {
      city: "Brisbane",
      address: "Level 5, 789 Queen Street, Brisbane QLD 4000",
      staff: 8,
      services: ["IT Support", "Cloud migration", "On-site services"]
    }
  },
  partnerships: [
    {
      name: "AWS",
      level: "Advanced Consulting Partner",
      since: "2021",
      specialties: ["Migration", "Security", "Well-Architected Reviews"]
    },
    {
      name: "Microsoft",
      level: "Gold Partner",
      since: "2020",
      specialties: ["Azure", "Microsoft 365", "Dynamics 365"]
    },
    {
      name: "Google Cloud",
      level: "Premier Partner",
      since: "2022",
      specialties: ["Data Analytics", "AI/ML", "Kubernetes"]
    }
  ]
}

// Enhanced search function with much more detailed responses
export function searchKnowledgeBase(question: string) {
  const validatedQuestion = knowledgeQuerySchema.parse({ question })
  const query = validatedQuestion.question.toLowerCase()
  
  // Comprehensive keyword matching for different topics
  const responses: Record<string, string> = {
    // Company info
    company: `LOU IT is a modern IT solutions company founded in ${COMPANY_DATA.company.founded} and based in ${COMPANY_DATA.company.location}. We have ${COMPANY_DATA.company.employees} employees and specialize in ${COMPANY_DATA.company.description}\n\nOur mission: ${COMPANY_DATA.company.mission}\nOur vision: ${COMPANY_DATA.company.vision}\nCore values: ${COMPANY_DATA.company.values.join(', ')}\n\nWe hold certifications in: ${COMPANY_DATA.company.certifications.join(', ')}\nRecent awards: ${COMPANY_DATA.company.awards.join(', ')}`,
    
    about: `${COMPANY_DATA.company.description}\n\nMission: ${COMPANY_DATA.company.mission}\nVision: ${COMPANY_DATA.company.vision}\nValues: ${COMPANY_DATA.company.values.join(', ')}\n\nWe're certified in ${COMPANY_DATA.company.certifications.join(', ')} and have won awards including: ${COMPANY_DATA.company.awards.join(', ')}`,
    
    // Services - detailed breakdown
    services: `We offer 4 comprehensive service categories:\n\n${COMPANY_DATA.services.map(s => `🔹 ${s.name}: ${s.description}\n   Features: ${s.details.features.join(', ')}\n   Technologies: ${s.details.technologies.join(', ')}\n   Pricing: ${s.pricing}`).join('\n\n')}`,
    
    cloud: `Our Cloud Infrastructure service provides comprehensive ${COMPANY_DATA.services[0].description}.\n\n✅ Key Features: ${COMPANY_DATA.services[0].details.features.join(', ')}\n💻 Technologies: ${COMPANY_DATA.services[0].details.technologies.join(', ')}\n⏱️ SLA: ${COMPANY_DATA.services[0].details.sla}\n📞 Support: ${COMPANY_DATA.services[0].details.support}\n💰 Pricing: ${COMPANY_DATA.services[0].pricing}`,
    
    security: `Our Cybersecurity service offers ${COMPANY_DATA.services[1].description}.\n\n🛡️ Features: ${COMPANY_DATA.services[1].details.features.join(', ')}\n🔧 Technologies: ${COMPANY_DATA.services[1].details.technologies.join(', ')}\n🏆 Team Certifications: ${COMPANY_DATA.services[1].details.certifications.join(', ')}\n📋 Compliance: ${COMPANY_DATA.services[1].details.compliance.join(', ')}\n💰 Pricing: ${COMPANY_DATA.services[1].pricing}`,
    
    digital: `Digital Transformation: ${COMPANY_DATA.services[2].description}.\n\n⚡ Features: ${COMPANY_DATA.services[2].details.features.join(', ')}\n💻 Technologies: ${COMPANY_DATA.services[2].details.technologies.join(', ')}\n📊 Methodology: ${COMPANY_DATA.services[2].details.methodology}\n⏰ Timeline: ${COMPANY_DATA.services[2].details.timeline}\n💰 Pricing: ${COMPANY_DATA.services[2].pricing}`,
    
    support: `IT Support: ${COMPANY_DATA.services[3].description}.\n\n🔧 Features: ${COMPANY_DATA.services[3].details.features.join(', ')}\n⚡ Response Times: ${COMPANY_DATA.services[3].details.response_times}\n🕐 Coverage: ${COMPANY_DATA.services[3].details.coverage}\n📍 Service Areas: ${COMPANY_DATA.services[3].details.locations}\n💰 Pricing: ${COMPANY_DATA.services[3].pricing}`,
    
    // Team - expanded
    team: `Our experienced leadership team:\n\n${COMPANY_DATA.team.map(p => `👤 ${p.name} - ${p.role}\n   Experience: ${p.experience}\n   Education: ${p.education}\n   Specialties: ${p.specialties.join(', ')}\n   Certifications: ${p.certifications.join(', ')}`).join('\n\n')}`,
    
    ceo: `${COMPANY_DATA.team[0].name} is our ${COMPANY_DATA.team[0].role} with ${COMPANY_DATA.team[0].experience}.\n\nEducation: ${COMPANY_DATA.team[0].education}\nSpecialties: ${COMPANY_DATA.team[0].specialties.join(', ')}\nCertifications: ${COMPANY_DATA.team[0].certifications.join(', ')}`,
    
    cto: `${COMPANY_DATA.team[1].name} is our ${COMPANY_DATA.team[1].role} with ${COMPANY_DATA.team[1].experience}.\n\nEducation: ${COMPANY_DATA.team[1].education}\nSpecialties: ${COMPANY_DATA.team[1].specialties.join(', ')}\nCertifications: ${COMPANY_DATA.team[1].certifications.join(', ')}`,
    
    // Technologies
    tech: `We work with cutting-edge technologies across multiple domains:\n\n☁️ Cloud: AWS, Azure, Google Cloud, Kubernetes, Docker\n💻 Development: React, Node.js, Python, PostgreSQL, MongoDB\n🔧 DevOps: Terraform, Ansible, Jenkins, GitLab, Prometheus\n🛡️ Security: Splunk, CrowdStrike, Fortinet, Palo Alto Networks\n📊 Business: Microsoft 365, Salesforce, Power BI, Tableau`,
    
    aws: `We're an AWS Advanced Consulting Partner specializing in:\n• Migration and modernization\n• Security and compliance\n• Well-Architected Reviews\n• Cost optimization\n• 24/7 monitoring and support\n\nOur team holds multiple AWS certifications including Solutions Architect Professional and Developer Associate.`,
    
    azure: `As a Microsoft Gold Partner, we provide:\n• Azure cloud migrations\n• Microsoft 365 implementations\n• Hybrid cloud solutions\n• Active Directory integration\n• Compliance and security\n\nOur expertise spans the entire Microsoft ecosystem.`,
    
    // Projects and case studies
    projects: `Recent successful projects:\n\n${COMPANY_DATA.projects.map(p => `🏆 ${p.name}\n   Client: ${p.client}\n   Duration: ${p.duration}\n   Scope: ${p.scope}\n   Technologies: ${p.technologies.join(', ')}\n   Outcome: ${p.outcome}`).join('\n\n')}`,
    
    // Contact - comprehensive
    contact: `Multiple ways to reach us:\n\n📧 General: ${COMPANY_DATA.contact.email}\n📧 Support: ${COMPANY_DATA.contact.support_email}\n📧 Sales: ${COMPANY_DATA.contact.sales_email}\n📧 Careers: ${COMPANY_DATA.contact.careers_email}\n\n📞 Main: ${COMPANY_DATA.contact.phone}\n🚨 Emergency: ${COMPANY_DATA.contact.emergency}\n\n🏢 Office: ${COMPANY_DATA.contact.address}\n🕐 Hours: ${COMPANY_DATA.contact.business_hours}`,
    
    // Pricing - detailed
    pricing: `Our pricing structure:\n\n☁️ Cloud Migration:\n   Small projects: ${COMPANY_DATA.pricing.cloud_migration.small}\n   Medium projects: ${COMPANY_DATA.pricing.cloud_migration.medium}\n   Large projects: ${COMPANY_DATA.pricing.cloud_migration.large}\n\n🛡️ Security Audits:\n   Basic: ${COMPANY_DATA.pricing.security_audit.basic}\n   Comprehensive: ${COMPANY_DATA.pricing.security_audit.comprehensive}\n   Enterprise: ${COMPANY_DATA.pricing.security_audit.enterprise}\n\n🔧 Monthly Support:\n   Basic: ${COMPANY_DATA.pricing.monthly_support.basic}\n   Standard: ${COMPANY_DATA.pricing.monthly_support.standard}\n   Premium: ${COMPANY_DATA.pricing.monthly_support.premium}`,
    
    // Locations
    locations: `We operate from 3 locations across Australia:\n\n${Object.entries(COMPANY_DATA.locations).map(([key, loc]) => `📍 ${loc.city}\n   Address: ${loc.address}\n   Staff: ${loc.staff} people\n   Services: ${loc.services.join(', ')}`).join('\n\n')}`,
    
    sydney: `Our Sydney headquarters:\n📍 ${COMPANY_DATA.locations.headquarters.address}\n👥 ${COMPANY_DATA.locations.headquarters.staff} staff members\n🛠️ Services: ${COMPANY_DATA.locations.headquarters.services.join(', ')}`,
    
    melbourne: `Our Melbourne office:\n📍 ${COMPANY_DATA.locations.melbourne.address}\n👥 ${COMPANY_DATA.locations.melbourne.staff} staff members\n🛠️ Services: ${COMPANY_DATA.locations.melbourne.services.join(', ')}`,
    
    brisbane: `Our Brisbane office:\n📍 ${COMPANY_DATA.locations.brisbane.address}\n👥 ${COMPANY_DATA.locations.brisbane.staff} staff members\n🛠️ Services: ${COMPANY_DATA.locations.brisbane.services.join(', ')}`,
    
    // Partnerships
    partnerships: `Our strategic partnerships:\n\n${COMPANY_DATA.partnerships.map(p => `🤝 ${p.name} ${p.level} (since ${p.since})\n   Specialties: ${p.specialties.join(', ')}`).join('\n\n')}`,
    
    // Certifications and compliance
    certifications: `Our company and team certifications:\n\n🏢 Company: ${COMPANY_DATA.company.certifications.join(', ')}\n\n👨‍💻 Team Certifications:\n${COMPANY_DATA.team.map(member => `• ${member.name}: ${member.certifications.join(', ')}`).join('\n')}`,
    
    compliance: `We ensure compliance with major standards:\n• GDPR (General Data Protection Regulation)\n• SOC 2 (System and Organization Controls)\n• PCI DSS (Payment Card Industry Data Security Standard)\n• HIPAA (Health Insurance Portability and Accountability Act)\n• ISO 27001 (Information Security Management)\n\nOur security team regularly conducts compliance audits and maintains documentation.`,
    
    // Emergency and support
    emergency: `24/7 Emergency Support:\n📞 ${COMPANY_DATA.contact.emergency}\n📧 ${COMPANY_DATA.contact.support_email}\n\n🚨 Response times for critical issues:\n• Critical systems down: 1 hour response\n• Security incidents: Immediate response\n• Data loss events: 30 minutes response\n\nOur emergency team includes certified security analysts and cloud architects.`
  }
  
  // Find matching response using multiple keywords
  for (const [keyword, response] of Object.entries(responses)) {
    if (query.includes(keyword)) {
      return {
        type: 'text' as const,
        text: `📋 ${response}`
      }
    }
  }
  
  // Default response with available topics
  return {
    type: 'text' as const,
    text: `📋 I can provide detailed information about LOU IT including:\n\n🏢 Company: About us, mission, values, certifications, awards\n🛠️ Services: Cloud, security, digital transformation, IT support\n👥 Team: Leadership, experience, certifications\n💻 Technologies: AWS, Azure, Google Cloud, development tools\n🎯 Projects: Case studies and success stories\n💰 Pricing: Detailed pricing for all services\n📍 Locations: Sydney, Melbourne, Brisbane offices\n🤝 Partnerships: AWS, Microsoft, Google Cloud\n📞 Contact: Multiple contact methods and emergency support\n🛡️ Compliance: Security standards and certifications\n\nTry asking about any of these topics for detailed information!`
  }
}

// Tool definition for MCP
export const knowledgeBaseTool = {
  name: 'search_knowledge',
  description: 'Search LOU IT company knowledge base for comprehensive information about services, team, technologies, projects, pricing, locations, partnerships, and contact details',
  schema: {
    question: knowledgeQuerySchema.shape.question
  }
} as const

// Export company data for display
export { COMPANY_DATA }