import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET(request: NextRequest) {
  try {
    const pdfPath = join(process.cwd(), "public", "resume.pdf");
    const pdfBuffer = readFileSync(pdfPath);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Tryston_Perry_Resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Error serving PDF:", error);
    return new NextResponse("PDF not found", { status: 404 });
  }
}
