export interface Project {
  id?: string
  title: string
  slug: string
  description: string
  image: string
  tech: string[]
  category: string[]
  demoLink: string
  codeLink: string
  featured?: boolean
  content: string
}

export interface ApiResponse {
  projects: Project[]
  success: boolean
  message?: string
}
