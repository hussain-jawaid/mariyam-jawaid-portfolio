import type { ExperienceEntry } from '@/types';

export const experiences: ExperienceEntry[] = [
  {
    id: '1',
    title: 'Trade Business Analyst',
    company: 'JS Bank',
    location: 'Karachi',
    startDate: 'Dec 2025',
    endDate: 'Present',
    category: 'trade-finance',
    slug: 'trade-business-analyst',
    description: [
      'Facilitate trade import/export transactions between branches and central processing units (CPU)',
      'Serve southern region branches as part of the Trade Hub, managing high-priority client accounts',
      'Coordinate with FX teams to secure competitive rates and ensure accurate payment execution',
      'Structure trade finance solutions, including LC payments, import bills, DA maturity bills, and export collections',
    ],
  },
  {
    id: '2',
    title: 'Relationship Manager, Trade Hub',
    company: 'JS Bank',
    location: 'Karachi',
    startDate: 'Nov 2022',
    endDate: 'Dec 2025',
    category: 'trade-finance',
    slug: 'relationship-manager',
    description: [
      'Managed trade finance operations for corporate and commercial clients across southern branches',
      'Built and maintained strong client relationships, improving service efficiency and response times',
      'Coordinated with internal teams to ensure smooth processing of import/export transactions',
      'Provided tailored trade solutions, including documentary collections and LC handling',
    ],
  },
  {
    id: '3',
    title: 'Service Quality Team Leader & Trainer',
    company: 'JS Bank',
    location: 'Karachi',
    startDate: 'Sept 2022',
    endDate: 'Nov 2022',
    category: 'quality',
    slug: 'quality-team-leader',
    description: [
      'Led recruitment and onboarding processes for the customer experience team',
      'Evaluated operational workflows and implemented process improvements',
      'Managed scheduling, reporting, and administrative operations for the quality team',
      'Conducted training programs to enhance team performance in quality management systems',
    ],
  },
  {
    id: '4',
    title: 'Service Quality Officer',
    company: 'JS Bank',
    location: 'Karachi',
    startDate: 'Nov 2021',
    endDate: 'Sept 2022',
    category: 'quality',
    slug: 'quality-officer',
    description: [
      'Monitored compliance with industry standards and internal policies',
      'Evaluated call quality and identified performance improvement areas',
      'Resolved customer issues to enhance satisfaction levels',
      'Updated SOPs to improve service quality and operational efficiency',
    ],
  },
  {
    id: '5',
    title: 'Customer Service Executive',
    company: 'JS Bank',
    location: 'Karachi',
    startDate: 'Feb 2020',
    endDate: 'Nov 2021',
    category: 'customer-service',
    slug: 'customer-service-executive',
    description: [
      'Handled high-volume inbound calls while maintaining service quality',
      'Reduced call handling time through efficient issue resolution',
      'Improved customer satisfaction scores through consistent service delivery',
      'Provided detailed product and service guidance to customers',
    ],
  },
];

export const getExperienceBySlug = (slug: string): ExperienceEntry | undefined => {
  return experiences.find(e => e.slug === slug);
};
