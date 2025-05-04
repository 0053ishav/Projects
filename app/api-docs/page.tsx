"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Copy, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn, fadeInUp, staggerContainer } from "@/hooks/use-animations"

export default function ApiDocs() {
  return (
    <>
      {/* Header */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-gradient-to-b from-primary/10 to-background py-12"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              API Documentation
            </motion.h1>
            <motion.p variants={fadeInUp} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground">
              Complete reference for the Projects API endpoints, parameters, and responses.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          {/* Sidebar */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="md:border-r pr-6">
            <div className="sticky top-24">
              <h3 className="font-medium mb-3">Contents</h3>
              <motion.ul variants={staggerContainer} className="space-y-2">
                <motion.li variants={fadeInUp}>
                  <a href="#introduction" className="text-muted-foreground hover:text-foreground transition-colors">
                    Introduction
                  </a>
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <a href="#endpoints" className="text-muted-foreground hover:text-foreground transition-colors">
                    Endpoints
                  </a>
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <a href="#cors" className="text-muted-foreground hover:text-foreground transition-colors">
                    CORS
                  </a>
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <a href="#rate-limiting" className="text-muted-foreground hover:text-foreground transition-colors">
                    Rate Limiting
                  </a>
                </motion.li>
                <motion.li variants={fadeInUp}>
                  <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">
                    Examples
                  </a>
                </motion.li>
              </motion.ul>

              <motion.div variants={fadeInUp} transition={{ delay: 0.3 }} className="mt-8">
                <Button asChild>
                  <Link href="/">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View Projects
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="prose max-w-none dark:prose-invert"
          >
            <motion.section variants={fadeInUp} id="introduction">
              <h2>Introduction</h2>
              <p>
                This API provides access to my portfolio projects data. It's designed to be simple, fast, and easy to
                use in any application.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp} id="endpoints" className="mt-10">
              <h2>Endpoints</h2>

              <div className="bg-muted p-6 rounded-lg mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold mr-3">GET</span>
                    <code className="font-mono text-lg">/api/projects</code>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Copy className="h-4 w-4" />
                    Copy
                  </Button>
                </div>
                <p>Returns a list of all projects.</p>

                <h4 className="font-medium mt-4 mb-2">Response</h4>
                <div className="bg-background border rounded-md overflow-hidden">
                  <div className="flex items-center justify-between border-b px-4 py-2">
                    <span className="font-medium">Response</span>
                    <Button variant="ghost" size="sm" className="gap-1 h-7">
                      <Copy className="h-3 w-3" />
                      Copy
                    </Button>
                  </div>
                  <pre className="p-4 overflow-x-auto text-sm">
                    {`{
  "success": true,
  "projects": [
    {
      "id": "project-id",
      "title": "Project Title",
      "description": "Project description",
      "image": "/path/to/image.png",
      "tags": ["Tag1", "Tag2"],
      "demoLink": "https://demo.example.com",
      "codeLink": "https://github.com/username/repo",
      "featured": true
    },
    ...
  ]
}`}
                  </pre>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeInUp} id="cors" className="mt-10">
              <h2>Cross-Origin Resource Sharing</h2>
              <p>
                This API supports Cross-Origin Resource Sharing (CORS) for all origins. You can make requests to this
                API from any domain without restrictions.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp} id="rate-limiting" className="mt-10">
              <h2>Rate Limiting</h2>
              <p>
                Currently, there are no rate limits in place. However, please be respectful and avoid making excessive
                requests to the API.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp} id="examples" className="mt-10">
              <h2>Example Usage</h2>

              <h4 className="font-medium mt-4 mb-2">TypeScript (Fetch)</h4>
              <div className="bg-background border rounded-md overflow-hidden mb-6">
                <div className="flex items-center justify-between border-b px-4 py-2">
                  <span className="font-medium">TypeScript</span>
                  <Button variant="ghost" size="sm" className="gap-1 h-7">
                    <Copy className="h-3 w-3" />
                    Copy
                  </Button>
                </div>
                <pre className="p-4 overflow-x-auto text-sm">
                  {`// Using fetch with TypeScript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  featured?: boolean;
}

interface ApiResponse {
  success: boolean;
  projects: Project[];
}

fetch('/api/projects')
  .then(response => response.json())
  .then((data: ApiResponse) => console.log(data.projects));`}
                </pre>
              </div>

              <h4 className="font-medium mt-4 mb-2">React with SWR</h4>
              <div className="bg-background border rounded-md overflow-hidden">
                <div className="flex items-center justify-between border-b px-4 py-2">
                  <span className="font-medium">TypeScript</span>
                  <Button variant="ghost" size="sm" className="gap-1 h-7">
                    <Copy className="h-3 w-3" />
                    Copy
                  </Button>
                </div>
                <pre className="p-4 overflow-x-auto text-sm">
                  {`// Using SWR with TypeScript
import useSWR from 'swr';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  featured?: boolean;
}

interface ApiResponse {
  success: boolean;
  projects: Project[];
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

function ProjectsList() {
  const { data, error } = useSWR<ApiResponse>('/api/projects', fetcher);
  
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  
  return (
    <div>
      {data.projects.map(project => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  );
}`}
                </pre>
              </div>
            </motion.section>

            <motion.div variants={fadeInUp} transition={{ delay: 0.4 }} className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-medium mb-2">Need more help?</h3>
              <p className="mb-4">
                If you have any questions or need further assistance with the API, feel free to reach out.
              </p>
              <Button variant="outline" asChild>
                <a href="https://github.com/0053ishav" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
