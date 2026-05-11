export type Profile = {
  name: string;
  location: string;
  headline: string;
  primaryRole: string;
  secondaryRole: string;
  englishLevel: string;
  summary: string;
  contact: {
    email?: string;
    phone?: string;
    links: Array<{
      label: string;
      href?: string;
    }>;
  };
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
};

export type BriefProject = {
  title: string;
  description: string;
  stack: string[];
};

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};
