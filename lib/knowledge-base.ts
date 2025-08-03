import { z } from "zod"

// Knowledge base schema
export const knowledgeQuerySchema = z.object({
  question: z.string().min(1, "Question is required")
})

// Mock company data
const COMPANY_DATA = {
  company: {
    name: "LOU IT",
    founded: "2020",
    location: "Sydney, Australia",
    employees: "25-50",
    description: "A modern IT solutions company specializing in cloud infrastructure, cybersecurity, and digital transformation.",
    mission: "To empower businesses through innovative technology solutions and exceptional service."
  },
  services: [
    {
      name: "Cloud Infrastructure",
      description: "AWS, Azure, and Google Cloud setup and management",
      pricing: "Starting from $2,500/month"
    },
    {
      name: "Cybersecurity",
      description: "Complete security audits, monitoring, and threat response",
      pricing: "Starting from $3,000/month"
    },
    {
      name: "Digital Transformation",
      description: "Legacy system modernization and workflow automation",
      pricing: "Project-based, starting from $15,000"
    },
    {
      name: "IT Support",
      description: "24/7 helpdesk and on-site technical support",
      pricing: "Starting from $150/hour"
    }
  ],
  team: [
    {
      name: "Lou Chen",
      role: "CEO & Founder",
      experience: "15+ years in enterprise IT",
      specialties: ["Cloud Architecture", "Business Strategy"]
    },
    {
      name: "Sarah Martinez",
      role: "CTO",
      experience: "12+ years in cybersecurity",
      specialties: ["Security Architecture", "Compliance"]
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      experience: "8+ years in full-stack development",
      specialties: ["React", "Node.js", "DevOps"]
    }
  ],
  technologies: [
    "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker",
    "React", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "Terraform", "Ansible", "Jenkins", "GitLab", "Prometheus"
  ],
  contact: {
    email: "hello@louit.com.au",
    phone: "+61 2 8234 5678",
    address: "Level 12, 456 George Street, Sydney NSW 2000",
    business_hours: "Monday-Friday 9:00 AM - 6:00 PM AEST"
  }
}

// Search function to find relevant information
export function searchKnowledgeBase(question: string) {
  const validatedQuestion = knowledgeQuerySchema.parse({ question })
  const query = validatedQuestion.question.toLowerCase()
  
  // Simple keyword matching for different topics
  const responses: Record<string, string> = {
    // Company info
    company: `LOU IT is a modern IT solutions company founded in ${COMPANY_DATA.company.founded} and based in ${COMPANY_DATA.company.location}. We have ${COMPANY_DATA.company.employees} employees and specialize in ${COMPANY_DATA.company.description}`,
    
    about: `${COMPANY_DATA.company.description} Our mission: ${COMPANY_DATA.company.mission}`,
    
    // Services
    services: `We offer 4 main services:\n${COMPANY_DATA.services.map(s => `• ${s.name}: ${s.description} (${s.pricing})`).join('\n')}`,
    
    cloud: `Our Cloud Infrastructure service includes ${COMPANY_DATA.services[0].description}. Pricing ${COMPANY_DATA.services[0].pricing}.`,
    
    security: `Our Cybersecurity service provides ${COMPANY_DATA.services[1].description}. Pricing ${COMPANY_DATA.services[1].pricing}.`,
    
    // Team
    team: `Our leadership team includes:\n${COMPANY_DATA.team.map(p => `• ${p.name} - ${p.role} (${p.experience})`).join('\n')}`,
    
    ceo: `${COMPANY_DATA.team[0].name} is our ${COMPANY_DATA.team[0].role} with ${COMPANY_DATA.team[0].experience}. Specialties: ${COMPANY_DATA.team[0].specialties.join(', ')}.`,
    
    // Technologies
    tech: `We work with these technologies: ${COMPANY_DATA.technologies.join(', ')}.`,
    
    // Contact
    contact: `Contact us at ${COMPANY_DATA.contact.email} or ${COMPANY_DATA.contact.phone}. Office: ${COMPANY_DATA.contact.address}. Hours: ${COMPANY_DATA.contact.business_hours}.`,
    
    // Pricing
    pricing: `Our pricing varies by service:\n${COMPANY_DATA.services.map(s => `• ${s.name}: ${s.pricing}`).join('\n')}`
  }
  
  // Find matching response
  for (const [keyword, response] of Object.entries(responses)) {
    if (query.includes(keyword)) {
      return {
        type: 'text' as const,
        text: `📋 ${response}`
      }
    }
  }
  
  // Default response
  return {
    type: 'text' as const,
    text: `📋 I can help you with information about LOU IT including our services, team, technologies, pricing, and contact details. Try asking about "company info", "services", "team", "technologies", "pricing", or "contact".`
  }
}

// Tool definition for MCP
export const knowledgeBaseTool = {
  name: 'search_knowledge',
  description: 'Search LOU IT company knowledge base for information about services, team, technologies, and contact details',
  schema: {
    question: knowledgeQuerySchema.shape.question
  }
} as const

// Export company data for display
export { COMPANY_DATA }