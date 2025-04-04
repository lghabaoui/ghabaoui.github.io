export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'design' | 'development' | 'video' | 'photography';
  image: string;
  link?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}