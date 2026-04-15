/**
 * Core TypeScript interfaces for Professional Portfolio
 */

export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  slug: string;
  category: 'trade-finance' | 'operations' | 'customer-service' | 'quality';
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  status?: string;
}

export interface ProfessionalInfo {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
  };
  skills: SkillCategory[];
  education: Education[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  inquiryType: 'collaboration' | 'opportunity' | 'general';
  message: string;
  timestamp: Date;
}
