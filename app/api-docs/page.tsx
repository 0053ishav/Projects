"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/hooks/use-animations";
import { CopyButton } from "@/components/CopyButton";

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
            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              API Documentation
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Complete reference for the Projects API endpoints, parameters, and
              responses.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          {/* Sidebar */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="md:border-r pr-6"
          >
            <div className="sticky top-24">
              <h3 className="font-medium mb-3">Contents</h3>
              <motion.ul variants={staggerContainer} className="space-y-2">
                {[
                  "introduction",
                  "endpoints",
                  "cors",
                  "rate-limiting",
                  "examples",
                ].map((id) => (
                  <motion.li key={id} variants={fadeInUp}>
                    <a
                      href={`#${id}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {id
                        .replace("-", " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
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
            <motion.section
              variants={fadeInUp}
              id="introduction"
              className="mb-6"
            >
              <h2>Introduction</h2>
              <p>
                This API provides read-only access to my portfolio projects
                data. It is backed by Appwrite, served through a secure gateway,
                and optimized with edge caching for fast, reliable access across
                all ishav.space properties.
              </p>
            </motion.section>

            <hr />

            <motion.section
              variants={fadeInUp}
              id="endpoints"
              className="mt-10"
            >
              <h2 className="mb-2">Endpoints</h2>

              <div className="bg-muted p-6 rounded-lg mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center truncate">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold mr-3">
                      GET
                    </span>
                    <code className="font-mono text-lg">
                      https://projects.ishav.space/api/projects
                    </code>
                  </div>
                 <CopyButton text="https://projects.ishav.space/api/projects" />

                </div>

                <p>
                  Returns a list of all <strong>published</strong> projects,
                  ordered by priority. Data is cached at the edge and
                  automatically updated via Appwrite webhooks.
                </p>

                <h4 className="font-medium mt-4 mb-2">Response</h4>
                <div className="bg-background border rounded-md overflow-hidden">
                  <div className="flex items-center justify-between border-b px-4 py-2">
                    <span className="font-medium">Response</span>
<CopyButton
  text={`{
  "success": true,
  "projects": [
    {
      "id": "project-id",
      "title": "Project Title",
      "description": "Project description",
      "image": "https://cloud.appwrite.io/v1/storage/buckets/{bucketId}/files/{fileId}/view?project={projectId}",
      "tags": ["nextjs", "reactjs", "tailwind"],
      "demoLink": "https://demo.example.com",
      "codeLink": "https://github.com/username/repo",
      "featured": true
    }
  ]
}
`}
  size="sm"
/>


                  </div>
                  <pre className="p-4 overflow-x-auto text-sm">{`{
  "success": true,
  "projects": [
    {
      "id": "project-id",
      "title": "Project Title",
      "description": "Project description",
      "image": "https://cloud.appwrite.io/v1/storage/buckets/{bucketId}/files/{fileId}/view?project={projectId}",
      "tags": ["nextjs", "reactjs", "tailwind"],
      "demoLink": "https://demo.example.com",
      "codeLink": "https://github.com/username/repo",
      "featured": true
    }
  ]
}
`}</pre>
                </div>
              </div>
            </motion.section>
            <hr />
            <motion.section
              variants={fadeInUp}
              id="cors"
              className="mt-10 mb-6 bg-muted p-6"
            >
              <h2>Cross-Origin Resource Sharing</h2>
              <p>
                This API supports CORS for the root domain{" "}
                <code className="mr-2">ishav.space</code>
                 and all of its subdomains. Requests from unrelated domains are
                not allowed.
              </p>
            </motion.section>

            <hr />
            <motion.section
              variants={fadeInUp}
              id="rate-limiting"
              className="mt-10 mb-6 bg-muted p-6"
            >
              <h2>Rate Limiting</h2>
              <p>
                Requests are limited per IP to prevent abuse. Excessive requests
                may receive a 
                <span className="text-red-600 ml-2">
                  429 Too Many Requests response.
                  </span>
              </p>
            </motion.section>

            <motion.section
              variants={fadeInUp}
              id="examples"
              className="mt-10 mb-6 "
            >
              <h2 className="mb-2">Example Usage</h2>

              <div className="bg-background border rounded-md overflow-hidden mb-6">
                <div className="flex items-center justify-between border-b px-4 py-2 bg-muted p-6">
                  <span className="font-medium ">TypeScript</span>
                  <CopyButton
  text={`interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // Appwrite Storage URL
  tags: string[];
  demoLink: string;
  codeLink?: string;
  featured?: boolean;
}

interface ApiResponse {
  success: boolean;
  projects: Project[];
}

fetch("https://projects.ishav.space/api/projects")
  .then((res) => res.json())
  .then((data: ApiResponse) => {
    console.log(data.projects);
  });
`}
  size="sm"
/>

                </div>
                <pre className="p-4 overflow-x-auto text-sm">{`interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // Appwrite Storage URL
  tags: string[];
  demoLink: string;
  codeLink?: string;
  featured?: boolean;
}

interface ApiResponse {
  success: boolean;
  projects: Project[];
}

fetch("https://projects.ishav.space/api/projects")
  .then((res) => res.json())
  .then((data: ApiResponse) => {
    console.log(data.projects);
  });
`}</pre>
              </div>
            </motion.section>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="mt-12 p-6 bg-muted rounded-lg"
            >
              <h3 className="text-lg font-medium mb-2">Need more help?</h3>
              <p className="mb-4">
                If you have any questions or need further assistance with the
                API, feel free to reach out.
              </p>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/0053ishav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}