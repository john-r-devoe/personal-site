import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WorkExperience } from "@/util/types";

interface Props {}

export default function Experience({}: Props) {
  // Sample work experience data
  const experiences: WorkExperience[] = [
    {
        id: '1',
        company: 'Improving Atlanta',
        position: 'Web Development Intern',
        duration: 'Aug 2023 - May 2024',
        description: 'Worked on a team of interns in developing internal company applications: including an event dashboard',
        achievements: [
            'Developed full-stack features for internal event dashboard using React, Next.js, and .NET API, serving company employees',
            'Led a team of 5 junior developers in implementing new dashboard features, conducting code reviews and establishing best practices',
            'Collaborated with senior engineers to design and implement RESTful API endpoints connecting frontend components to SQL database'
        ],
        tags: ['React', 'Next.js', 'TypeScript', 'SQL', '.NET API'],
        status: 'completed'
    },
    {
        id: '2',
        company: 'Georgia Tech Tutoring and Academic Support',
        position: 'PLUS Leader',
        duration: 'Aug 2025 - Dec 2025',
        description: 'Collaborated with professors and class administrators to host review sessions for CS 2050 (Introduction to Discrete Mathematics)',
        achievements: [
            'Led weekly review sessions for 30+ students covering proof techniques, logic, graph theory, and combinatorics',
            'Developed supplementary practice problems and study materials that improved student understanding of complex discrete math concepts',
            'Maintained regular communication with course instructors to align tutoring content with lecture material and upcoming assessments'
        ],
        tags: ['Tutoring', 'Collaboration', 'Discrete Mathematics', 'Proof Techniques'],
        status: 'completed'
    },
    {
        id: '3',
        company: 'Manhattan Associates',
        position: 'Services Consulting Co-Op',
        duration: 'Jan 2026 - Present',
        description: 'Supporting supply chain consulting services through technical documentation, client research, and customer communication management for enterprise supply chain solutions.',
        achievements: [
            'Created comprehensive training materials and documentation for supply chain management software, improving onboarding efficiency for new clients',
            'Utilized Salesforce CRM to conduct detailed company research, organize client data, and track engagement opportunities across multiple accounts',
            'Managed client-facing communications through shared Outlook inbox, ensuring timely responses to customer inquiries and maintaining professional correspondence'
        ],
        tags: ['Salesforce', 'Microsoft Outlook', 'Supply Chain Management Software', 'Technical Documentation'],
        status: 'current'
    }
  ];

  return (
    <div id="experience" className="px-page-margin py-section-y-padding w-full bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience) => (
            <ExperienceUnit key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceUnit({ experience }: { experience: WorkExperience }) {
  const isCurrent = experience.status === 'current';

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div>
            <CardTitle className="text-xl">{experience.position}</CardTitle>
            <CardDescription className="text-lg font-semibold text-blue-600">
              {experience.company}
            </CardDescription>
          </div>
          {isCurrent && (
            <Badge className="bg-green-500 hover:bg-green-600">
              Current
            </Badge>
          )}
        </div>
        <p className="text-sm text-gray-600">{experience.duration}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-700">{experience.description}</p>
        
        {/* Key Achievements */}
        <div>
          <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
          <ul className="space-y-1">
            {experience.achievements.slice(0, 3).map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <svg 
                  className="w-4 h-4 text-green-500 shrink-0 mt-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}