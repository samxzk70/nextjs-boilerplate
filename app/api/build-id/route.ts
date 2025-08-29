import { NextResponse } from "next/server";

export async function GET() {
  const buildId = process.env.NEXT_PUBLIC_BUILD_ID || "unknown";
  
  return NextResponse.json({
    buildId,
    timestamp: Date.now(),
  });
}