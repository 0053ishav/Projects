"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cardVariants, tagVariants } from "@/hooks/use-animations"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      custom={index}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="overflow-hidden flex flex-col h-full group border-muted">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg?height=200&width=400"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"
          />

          {/* {project.featured && (
            <div className="absolute top-3 right-3">
              <Badge variant="default" className="bg-primary/90 backdrop-blur-sm">
                Featured
              </Badge>
            </div>
          )} */}
        </div>

        <CardContent className="flex-grow pt-6">
          <motion.h3
            className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
            variants={tagVariants}
          >
            {project.title}
          </motion.h3>
          <motion.p className="text-muted-foreground mb-4 line-clamp-3" variants={tagVariants}>
            {project.description}
          </motion.p>

          <motion.div className="flex flex-wrap gap-2 mt-auto" variants={tagVariants}>
            {project.tags.map((tag, idx) => (
              <motion.div key={idx} variants={tagVariants} custom={idx}>
                <Badge variant="secondary" className="text-xs font-medium">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>

        <CardFooter className="flex justify-between pt-2 pb-4">
          {project.demoLink && project.demoLink !== "#" ? (
            <Button variant="ghost" size="sm" className="gap-1" asChild>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          ) : (
            <Button variant="ghost" size="sm" disabled className="gap-1">
              <ExternalLink className="h-4 w-4" />
              No Demo
            </Button>
          )}

          {project.codeLink && project.codeLink !== "#" ? (
            <Button variant="ghost" size="sm" className="gap-1" asChild>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View Code
              </a>
            </Button>
          ) : (
            <Button variant="ghost" size="sm" disabled className="gap-1">
              <Github className="h-4 w-4" />
              Private Code
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
