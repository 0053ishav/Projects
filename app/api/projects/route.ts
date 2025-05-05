import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/lib/projects-data";

// Allow root domain and any subdomain of ishav.space
function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  try {
    const url = new URL(origin);
    return url.hostname.endsWith(".ishav.space") || url.hostname === "ishav.space";
  } catch {
    return false;
  }
}

export async function GET(req: NextRequest) {
  const origin = req.headers.get("origin");
  const allowed = isAllowedOrigin(origin);

  await new Promise((resolve) => setTimeout(resolve, 300)); // simulate delay

  return NextResponse.json(
    { projects, success: true },
    {
      headers: {
        "Access-Control-Allow-Origin": allowed && origin ? origin : "https://ishav.space", // fallback to main domain
        "Vary": "Origin", // inform caches that response varies by origin
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    }
  );
}
