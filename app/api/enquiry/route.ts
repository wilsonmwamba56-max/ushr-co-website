
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const eventDate = String(body.eventDate ?? "").trim();
    const eventType = String(body.eventType ?? "").trim();
    const details = String(body.details ?? "").trim();

    if (
      !name ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !phone ||
      !eventDate ||
      !eventType ||
      !details
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.ENQUIRY_TO_EMAIL;
    const sender = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: "New Event Enquiry - Protocol Kenya",
      text: [
        "New enquiry from the Protocol Kenya website",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Event Date: ${eventDate}`,
        `Event Type: ${eventType}`,
        "",
        "Event Details:",
        details,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send the enquiry." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      { error: "Unable to process the enquiry." },
      { status: 500 }
    );
  }
}
