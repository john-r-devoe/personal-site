import { StaticImageData } from "next/image";

export interface Project {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
    tags: string[];
    links: {
        github?: string;
        demo?: string;
    };
    status: 'completed' | 'in-progress';
}

export interface WorkExperience {
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
    achievements: string[];
    tags: string[];
    status: 'completed' | 'current';
}