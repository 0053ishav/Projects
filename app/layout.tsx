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
  description: "A showcase of projects by Ishav, a Full-Stack Developer exploring the Digital Cosmos.",
  keywords: ["full-stack", "developer projects", "portfolio", "web development", "software development", "tech showcase", "React", "Node.js", "JavaScript", "developer tools", "ishav", "ishav.space"],
  metadataBase: new URL("https://projects.ishav.space"),
  openGraph: {
    title: "Ishav's Projects | Full-Stack Developer Portfolio",
    description: "Explore Ishav's portfolio of full-stack projects, showcasing innovative web and software development.",
    url: "https://projects.ishav.space",
    siteName: "Ishav's Projects",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ishav's Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishav's Projects | Full-Stack Developer Portfolio",
    description: "Explore Ishav's portfolio of full-stack projects, including web and software development.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/DevFavicon/favicon.ico", sizes: "any" },
      { url: "/DevFavicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/DevFavicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/DevFaviconapple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/DevFavicon//safari-pinned-tab.svg",
        color: "#2563EB",
      },
    ],
  },
  manifest: "/DevFavicon/site.webmanifest",
};



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
