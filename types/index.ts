export interface Project {
  id?: string
  title: string
  description: string
  image: string
  tags: string[]
  demoLink: string
  codeLink: string
  featured?: boolean
}

export interface ApiResponse {
  projects: Project[]
  success: boolean
  message?: string
}
