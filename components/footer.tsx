"use client"

import { GithubIcon, LinkedinIcon, ExternalLinkIcon } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp } from "@/hooks/use-animations"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-muted-foreground">
              Full-Stack Developer exploring the Digital Cosmos | Navigating the tech universe with Next.js and
              ServiceNow.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-col space-y-2">
              <motion.a
                whileHover={{ x: 5 }}
                href="https://github.com/0053ishav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="https://linkedin.com/in/0053ishav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="https://3dportfolio.ishav.space"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                Portfolio
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <div className="flex flex-col space-y-2">
              <motion.a
                whileHover={{ x: 5 }}
                href="/api-docs"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                API Documentation
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="https://github.com/0053ishav/projects-api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Source Code
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} Ishav. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}
