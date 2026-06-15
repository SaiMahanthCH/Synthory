export interface PortfolioCompany {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
  features: string[];
  status: 'Active' | 'In Development' | 'Accelerated';
  url: string;
  logoUrl?: string;
  gradientClass: string;
}

export interface ValueCard {
  title: string;
  description: string;
  tag: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  initials: string;
  linkedin: string;
  twitter: string;
}

export const PORTFOLIO_COMPANIES: PortfolioCompany[] = [
  {
    id: 'varta',
    name: 'VARTA',
    category: 'Communication Infrastructure',
    categoryLabel: 'COMMUNICATION INFRASTRUCTURE',
    description: 'Varta is a WhatsApp engagement platform. Businesses can connect WhatsApp through a simple QR code and instantly begin managing communication at scale.',
    features: [
      'Bulk Messaging',
      'Broadcast Campaigns',
      'Contact Management',
      'Customer Engagement',
      'Conversation Management',
      'Business Communication'
    ],
    status: 'Active',
    url: '#varta',
    gradientClass: 'from-blue-500/20 via-blue-400/10 to-indigo-600/20'
  },
  {
    id: 'flowzio',
    name: 'FLOWZIO',
    category: 'Artificial Intelligence',
    categoryLabel: 'ARTIFICIAL INTELLIGENCE',
    description: 'Flowzio enables businesses to create WhatsApp AI agents using simple prompts. The platform removes technical complexity and allows businesses to launch AI-powered assistants quickly.',
    features: [
      'Prompt to AI Agent',
      'WhatsApp Automation',
      'Lead Qualification',
      'Customer Support',
      'Business Workflows'
    ],
    status: 'Active',
    url: '#flowzio',
    gradientClass: 'from-fuchsia-500/20 via-purple-400/10 to-violet-600/20'
  },
  {
    id: 'flodon',
    name: 'FLODON',
    category: 'Business Growth',
    categoryLabel: 'BUSINESS GROWTH',
    description: 'Flodon helps businesses scale through systems, automation, customer acquisition, and growth-focused strategies.',
    features: [
      'Lead Generation',
      'Sales Funnels',
      'Automation',
      'Sales Systems',
      'Growth Consulting'
    ],
    status: 'Active',
    url: '#flodon',
    gradientClass: 'from-emerald-500/20 via-teal-400/10 to-teal-600/20'
  },
  {
    id: 'conquer',
    name: 'CONQUER',
    category: 'Community',
    categoryLabel: 'COMMUNITY',
    description: 'Conquer is the official community ecosystem of Synthory. Focused on entrepreneurs, creators, students, builders, and future founders.',
    features: [
      'Business Community',
      'Mindset & Growth',
      'Networking',
      'Execution Support',
      'Entrepreneurship Education'
    ],
    status: 'Active',
    url: '#conquer',
    gradientClass: 'from-amber-500/20 via-orange-400/10 to-yellow-600/20'
  }
];

export const VALUE_CARDS: ValueCard[] = [
  {
    tag: 'Build',
    title: 'We build',
    description: 'We launch and operate businesses directly from inception.'
  },
  {
    tag: 'Support',
    title: 'We support',
    description: 'We help scale businesses with battle-tested systems and playbook execution.'
  },
  {
    tag: 'Mentor',
    title: 'We mentor',
    description: 'We share deep expertise, systems, knowledge, and tactical guidance.'
  },
  {
    tag: 'Connect',
    title: 'We connect',
    description: 'We create unfair opportunities through global community and strategic partnerships.'
  },
  {
    tag: 'Invest',
    title: 'We invest',
    description: 'Future initiatives will support promising founders and scalable ventures.'
  }
];

export const FOUNDERS: Founder[] = [
  {
    name: 'Sanskar Kolekar',
    role: 'Founder',
    bio: 'Visionary behind Synthory. Focused on building a long-term ecosystem of internet businesses.',
    initials: 'SK',
    linkedin: 'https://linkedin.com/in/sanskarkolekar',
    twitter: 'https://twitter.com/sanskarkolekar'
  },
  {
    name: 'Tejas Adgatla',
    role: 'Co-Founder',
    bio: 'Responsible for helping build and scale the Synthory ecosystem alongside the founder.',
    initials: 'TA',
    linkedin: 'https://linkedin.com/in/tejasadgatla',
    twitter: 'https://twitter.com/tejasadgatla'
  }
];

export const EXPANSION_DOMAINS = [
  { domain: 'AI & Machine Learning', icon: 'Cpu' },
  { domain: 'Software Products (SaaS)', icon: 'Layers' },
  { domain: 'Media & Content', icon: 'Video' },
  { domain: 'Education Platforms', icon: 'GraduationCap' },
  { domain: 'Communities & Networks', icon: 'Users' },
  { domain: 'Business Services', icon: 'Briefcase' },
  { domain: 'Developer Tools', icon: 'Terminal' },
  { domain: 'Investment Vehicles', icon: 'TrendingUp' },
  { domain: 'Creator Economy', icon: 'Sparkles' },
  { domain: 'Automation Infrastructure', icon: 'Repeat' },
  { domain: 'Digital Infrastructure', icon: 'Globe' }
];

export const ROADMAP_YEARS = [
  {
    phase: 'Phase 1',
    title: 'Foundation Mapping',
    description: 'Launch of Varta & Flowzio WhatsApp platforms. Aligning initial communication stack.'
  },
  {
    phase: 'Phase 2',
    title: 'Growth Consulting',
    description: 'Expanding under Flodon workspace and scaling outreach systems for businesses globally.'
  },
  {
    phase: 'Phase 3',
    title: 'Community Consolidation',
    description: 'Inauguration of Conquer ecosystem. Fueling the base for entrepreneurs, students, and builders.'
  },
  {
    phase: 'Phase 4',
    title: 'Ecosystem Venture Studio',
    description: 'Deeper cross-pollination among portfolio brands. Strategic seed investments inside the ecosystem.'
  }
];
