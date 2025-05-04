"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, GithubIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { navVariants } from "@/hooks/use-animations"

export default function NavBar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ishav
              </span>
            </Link>
          </motion.div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex space-x-1">
              <Link
                href="/"
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === "/"
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/60 hover:text-foreground hover:bg-accent",
                )}
              >
                Projects
              </Link>
              <Link
                href="/api-docs"
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === "/api-docs"
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/60 hover:text-foreground hover:bg-accent",
                )}
              >
                API Docs
              </Link>
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/0053ishav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
