import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/appwrite";
import { Query } from "node-appwrite";
import { rateLimit } from "@/lib/rate-limit";


export const runtime = "nodejs";
const endpoint = process.env.APPWRITE_ENDPOINT!;
const projectId = process.env.APPWRITE_PROJECT_ID!;
const bucketId = process.env.APPWRITE_BUCKET_ID!;


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

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests" },
      { status: 429 }
    );
  }

  const { databases } = await createAdminClient();

  const res = await databases.listDocuments(
    process.env.APPWRITE_DB_ID!,
    process.env.APPWRITE_COLLECTION_ID!,
    [
      Query.equal("status", "published"),
      Query.orderAsc("order"),
    ]
  );

  const projects = res.documents.map((doc) => ({
    id: doc.$id,
    title: doc.title,
    description: doc.description,
    tags: doc.tags,
    demoLink: doc.demoLink,
    codeLink: doc.codeLink,
    featured: doc.featured ?? false,
    image: `${endpoint}/storage/buckets/${bucketId}/files/${doc.imageFileId}/view?project=${projectId}`,

  }));

  return NextResponse.json(
    { projects, success: true },
    {
      headers: {
        "Access-Control-Allow-Origin":
          allowed && origin ? origin : "https://ishav.space",
        "Vary": "Origin",
        "Cache-Control": "public, s-maxage=600, stale-while-revalidate=300",
      },
    }
  );
}