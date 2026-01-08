import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/appwrite";
import { Query } from "node-appwrite";
import { rateLimit } from "@/lib/rate-limit";


export const runtime = "nodejs";
const endpoint = process.env.APPWRITE_ENDPOINT!;
const projectId = process.env.APPWRITE_PROJECT_ID!;
const bucketId = process.env.APPWRITE_BUCKET_ID!;


// Allow root domain and any subdomain of ishav.space
// function isAllowedOrigin(origin: string | null): boolean {
//   if (!origin) return true;
//   try {
//     const url = new URL(origin);
//     return url.hostname.endsWith(".ishav.space") || url.hostname === "ishav.space";
//   } catch {
//     return false;
//   }
// }

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true;

  try {
    const url = new URL(origin);

    // ✅ production
    if (
      url.hostname === "ishav.space" ||
      url.hostname.endsWith(".ishav.space")
    ) {
      return true;
    }

    // ✅ local development
    if (
      process.env.NODE_ENV === "development" &&
      (url.hostname === "localhost" || url.hostname === "127.0.0.1")
    ) {
      return true;
    }

    return false;
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
    slug: doc.slug,
    description: doc.description,
    tech: doc.tech,
    category: doc.category,
    demoLink: doc.demoLink,
    codeLink: doc.codeLink,
    featured: doc.featured ?? false,
    content: doc.content,
    image: `${endpoint}/storage/buckets/${bucketId}/files/${doc.imageFileId}/view?project=${projectId}`,

  }));


  return NextResponse.json(
    { projects, success: true },
    {
      headers: {
        "Access-Control-Allow-Origin": allowed && origin ? origin : "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Credentials": "true",
        "Vary": "Origin",
      },
    }
  );
}