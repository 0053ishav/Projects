import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
// import FloatingTechIcons from "@/components/FloatingTechIcons"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {

  title: "Ishav's Projects | Full-Stack Developer",
  description: "A showcase of projects by Ishav - Full-Stack Developer exploring the Digital Cosmos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <NavBar />

            <main className="flex-1">{children}
               {/* <FloatingTechIcons /> */}
               </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
