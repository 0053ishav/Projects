import { NextResponse } from "next/server"
import { projects } from "@/lib/projects-data"

export async function GET() {
  // You can add logic here to filter, sort, or modify the projects data
  // For example, you could fetch from a database instead of using the static data

  // Add a small delay to simulate network latency (optional)
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Return the projects with proper headers
  return NextResponse.json(
    { projects, success: true },
    {
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow cross-origin requests
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300", // Cache for 60 seconds, stale for 5 minutes
      },
    },
  )
}
