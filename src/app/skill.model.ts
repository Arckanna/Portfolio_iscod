export interface Skill {
  category: string;
  name: string;
  level: number;
  icon?: string;
  description?: string;
}

export enum SkillCategory {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  DEVOPS = 'DevOps',
  ARCHITECTURE = 'Architecture',
  MANAGEMENT = 'Management'
} 