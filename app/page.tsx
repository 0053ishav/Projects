"use client";

import { useState } from "react";
import useSWR from "swr";
import ProjectCard from "@/components/project-card";
import FilterBar from "@/components/filter-bar";
import { Loader2, RefreshCw, Code, Database, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  heroButtonVariants,
  heroTextVariants,
  staggerContainer,
} from "@/hooks/use-animations";
import type { Project } from "@/types";
import FloatingTechBurst from "@/components/FloatingTechIcons";

// Fetcher function for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const iconMap: Record<string, string> = {
  "React.js": "/icons/React.svg",
  "Next.js": "/icons/Next.js.svg",
  "Tailwind": "/icons/Tailwind.svg",
  "Clerk": "/icons/Clerk.jpg",
  "Appwrite": "/icons/Appwrite.svg",
  "Chart.js": "/icons/Chart.js.svg",
  "Drizzle": "/icons/Drizzle.png",
  "Firebase": "/icons/Firebase.svg",
  "Neon": "/icons/Neon.svg",
  "Three.js": "/icons/Three.js.svg",
  "Vite.js": "/icons/Vite.js.svg",
  "Zod": "/icons/Zod.svg",
  "TypeScript": "/icons/TypeScript.svg",
  // add more as needed
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [useExternalApi, setUseExternalApi] = useState(false);
  const [showApiUrl, setShowApiUrl] = useState(false);

  // Determine which API endpoint to use
  const apiUrl = useExternalApi
    ? "https://projects.ishav.space/api/projects"
    : "/api/projects";

  // Fetch projects data using SWR
  const { data, error, isLoading, mutate } = useSWR(apiUrl, fetcher);

  // Extract projects from the response
  const projects: Project[] = data?.projects || data || [];

  // Extract unique tags from all projects
  const allTags = projects
    ? Array.from(new Set(projects.flatMap((project) => project.tags))).sort()
    : [];

  // Filter projects based on active filter
  const filteredProjects = activeFilter
    ? projects?.filter((project) => project.tags.includes(activeFilter))
    : projects;

  // Handle filter change
  const handleFilterChange = (tag: string) => {
    setActiveFilter(activeFilter === tag ? null : tag);
  };

  // Toggle between local and external API
  const handleApiToggle = () => {
    setUseExternalApi((prev) => {
      const newState = !prev;
      if (newState) {
        setShowApiUrl(true);
      } else {
        setShowApiUrl(false);
      }
      return newState;
    });
  };

  if (error)
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center py-20"
      >
        <p className="text-red-500 mb-4">Failed to load projects</p>
        <Button onClick={() => mutate()} variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" /> Try Again
        </Button>
      </motion.div>
    );

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
        <FloatingTechBurst
        trigger={activeFilter}
        iconSrc={activeFilter ? iconMap[activeFilter] : ""}
        alt={activeFilter || ""}
      />
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={heroTextVariants}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Welcome to My Project Showcase
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={heroTextVariants}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              Full-Stack Developer exploring the Digital Cosmos | Navigating the
              tech universe with Next.js
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroButtonVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button asChild>
                <a
                  href="https://github.com/0053ishav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="mr-2 h-4 w-4" /> View GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/api-docs">
                  <Database className="mr-2 h-4 w-4" /> API Documentation
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">Featured Projects</h2>
              <p className="text-muted-foreground">
                Explore my latest work and personal projects
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ease: "easeOut" }}
              className="flex flex-col md:items-center mt-4 md:mt-0 space-y-4 md:space-y-0 "
            >
              {/* API Toggle */}
              <div className="flex flex-row md:flex-row-reverse md:space-x-4 items-center space-x-2 bg-muted/50 p-2 rounded-lg">
                <Switch
                  id="api-toggle"
                  checked={useExternalApi}
                  onCheckedChange={handleApiToggle}
                />
                <Label htmlFor="api-toggle" className="text-sm md:pr-4">
                Using {useExternalApi ? "External" : "Local"} API 
                </Label>
              </div>

              {/* Fixed-height wrapper prevents CLS */}
              <div className="relative min-h-[48px] w-full">
                <AnimatePresence>
                  {showApiUrl && (
                    <motion.div
                      key="api-url-banner"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 top-0 w-full bg-blue-100 text-blue-800 border border-blue-300 font-mono px-4 py-2 rounded-md flex items-center space-x-2"
                    >
                      <span className="text-xs truncate">
                        API:{" "}
                        <a
                          href={apiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-600 hover:text-blue-800"
                        >
                          {apiUrl}
                        </a>
                      </span>
                      <button
                        onClick={() => setShowApiUrl(false)}
                        className="ml-2 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut" }}
              className="flex justify-center items-center py-20"
            >
              <div className="flex flex-col items-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground">Loading projects...</p>
              </div>
            </motion.div>
          ) : (
            <>
              {allTags.length > 0 && (
                <FilterBar
                  tags={allTags}
                  activeFilter={activeFilter}
                  onFilterChange={handleFilterChange}
                />
              )}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
              >
                {filteredProjects?.map((project, index) => (
                  <ProjectCard
                    key={project.id || index}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>

              {filteredProjects?.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut" }}
                  className="text-center py-16 px-4"
                >
                  <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">
                    No projects found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    No projects match the selected filter. Try selecting a
                    different technology.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => handleFilterChange(activeFilter!)}
                  >
                    Clear Filter
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
