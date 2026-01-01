import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-appwrite-signature");

  // 🔐 Simple shared-secret check
  if (secret !== process.env.APPWRITE_WEBHOOK_SECRET) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  // ⚠️ We don't need payload details for now
  // Cache invalidation is implicit on next request

  return NextResponse.json(
    { success: true, message: "Cache invalidated" },
    {
      headers: {
        // Important: do not cache webhook responses
        "Cache-Control": "no-store",
      },
    }
  );
}
