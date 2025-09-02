import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    buildId: process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_ID || "unknown",
  })
}