import { Project } from "@/util/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";

import spoiler_alert from "@/public/spoileralert.png";
import bizzin from "@/public/BizzIn.png";
import markov from "@/public/markovchain.png";
import spendwise from "@/public/spendwise.png";

interface Props {
  
}
export default function Projects({}: Props) {
  // Sample project data
  const projects: Project[] = [
    {
      id: '1',
      title: 'Spoiler Alert',
      description: 'A smart fridge companion that helps track food items, reduce waste, and generate AI-powered recipe suggestions.',
      image: spoiler_alert,
      tags: ['React', 'Flask API', 'MySQL'],
      links: {
        github: 'https://github.com/EthanLi1360/spoiler_alert',
      },
      status: 'completed'
    },
    {
      id: '2',
      title: 'BizzIn',
      description: 'A predictive analytics platform that uses machine learning to help organizations identify optimal locations to set up brick-and-mortar businesses.',
      image: bizzin,
      tags: ['Next.js', 'TypeScript', 'OpenAI', 'MongoDB', 'Flask API', 'scikit-learn'],
      links: {
        github: 'https://github.com/john-r-devoe/hack-25',
        demo: 'https://devpost.com/software/bizzin-j2pd0m'
      },
      status: 'completed'
    },
    {
      id: '3',
      title: 'Markov Chain Stock Predictor',
      description: 'A stock prediction tool that uses markov chains with the slopes of the stock to predict future prices. Contains an auto-tolerance tool to find optimal slope-ranges.',
      image: markov,
      tags: ['Next.js', 'TypeScript', 'Linear Algebra'],
      links: {
        github: 'https://github.com/john-r-devoe/hack-25',
        demo: 'https://markov-chain-stock-prediction-git-main-john-devoes-projects.vercel.app/'
      },
      status: 'completed'
    },
    {
      id: '4',
      title: 'SpendWise',
      description: 'A budget app developed for CS2340 (Objects and Design) to help users manage their expenses. Includes AI chatbot assistance and allows users to create Savings Circles with their friends.',
      image: spendwise,
      tags: ['Android Studio', 'Java', 'SOLID Design Principles'],
      links: {
      },
      status: 'completed'
    },
    {
      id: '5',
      title: 'Achronia VTT',
      description: 'A virtual tabletop for tabletop RPGs specializing in custom configuration for all game systems and an in-depth note-taking system.',
      image: spendwise, //Could be anything, won't show
      tags: ['Next.js', 'TypeScript', 'Steam SDK', 'P2P Networking', 'Tauri', 'Rust'],
      links: {
        demo: "https://eastern-legume-0fd.notion.site/Achronia-VTT-06fa888bfea38257a1e68113c1dd4581"
      },
      status: 'in-progress'
    }
  ];

  return (
    <div id="projects" className="px-page-margin py-section-y-padding w-full bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectUnit key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectUnit({ project }: { project: Project }) {
  const isInProgress = project.status === 'in-progress';

  return (
    <Card className={`hover:shadow-lg transition-shadow ${isInProgress ? 'opacity-60' : ''}`}>
      <CardHeader>
        <div className="relative h-48 bg-gray-200 rounded-md mb-4 overflow-hidden">
          {project.image ? (
            <Image
                width={800}
                height={450}
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              No Image
            </div>
          )}
          {isInProgress && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <Badge variant="secondary" className="bg-gray-500 text-black">
                In Progress
              </Badge>
            </div>
          )}
        </div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        {project.status === "completed" && project.links.github && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" >
              GitHub
            </a>
          </Button>
        )}
        {project.links.demo && (
          <Button size="sm" asChild>
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}