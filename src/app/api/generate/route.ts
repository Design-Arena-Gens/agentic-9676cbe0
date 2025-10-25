import { NextRequest, NextResponse } from "next/server";
import { generatePrompt } from "@/lib/prompt";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const prompt = generatePrompt(body);
    return NextResponse.json({ prompt });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
