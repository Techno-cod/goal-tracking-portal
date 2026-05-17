import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "test");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, subject, message } = body;

    const data = await resend.emails.send({
      from: "AtomQuest <onboarding@resend.dev>",
      to: [email],
      subject,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>${subject}</h2>
          <p>${message}</p>
        </div>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}