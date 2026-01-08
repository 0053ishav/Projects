"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { X } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, tagVariants } from "@/hooks/use-animations"

interface FilterBarProps {
  tech: string[]
  activeFilter: string | null
  onFilterChange: (tag: string) => void
}

export default function FilterBar({ tech, activeFilter, onFilterChange }: FilterBarProps) {
  const [showAll, setShowAll] = useState(false)

  // Show only first 8 tech unless "Show All" is clicked
  const visibleTags = showAll ? tech : tech.slice(0, 8)
  const hasMoreTags = tech.length > 8

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-medium">Filter by Technology</h2>
        {activeFilter && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <Button variant="ghost" size="sm" onClick={() => onFilterChange(activeFilter)} className="text-xs gap-1">
              <X className="h-3 w-3" />
              Clear filter
            </Button>
          </motion.div>
        )}
      </div>

      <motion.div className="flex flex-wrap gap-2" variants={staggerContainer}>
        {visibleTags.map((tag, index) => (
          <motion.div key={tag} variants={tagVariants} custom={index}>
            <Button
              variant={activeFilter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(tag)}
              className={cn(
                "rounded-full text-xs font-medium",
                activeFilter === tag ? "bg-primary text-primary-foreground" : "bg-background hover:bg-accent",
              )}
            >
              {tag}
            </Button>
          </motion.div>
        ))}

        {hasMoreTags && !showAll && (
          <motion.div variants={tagVariants} custom={visibleTags.length}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAll(true)}
              className="rounded-full text-xs font-medium"
            >
              +{tech.length - 8} more
            </Button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
