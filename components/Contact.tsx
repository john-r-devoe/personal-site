import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, FileText, Linkedin, Github } from "lucide-react";

interface Props {}

export default function Contact({}: Props) {
  const contactInfo = {
    email: "jdevoe7@gatech.edu",
    resume: "personal-site/Resume.pdf",
    linkedin: "https://www.linkedin.com/in/john-devoe/",
    github: "https://github.com/john-r-devoe",
  };

  return (
    <div id="contact" className="px-page-margin py-section-y-padding w-full bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>Send me a message</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Resume Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle>Resume</CardTitle>
                  <CardDescription>View my resume</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href={contactInfo.resume} target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* LinkedIn Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Linkedin className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <CardTitle>LinkedIn</CardTitle>
                  <CardDescription>Connect with me</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* GitHub Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Github className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <CardTitle>GitHub</CardTitle>
                  <CardDescription>Check out my code</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                  View GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}