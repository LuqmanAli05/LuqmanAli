"use server";

import nodemailer from "nodemailer";

// Create SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      error: "All fields are required",
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Invalid email address",
    };
  }

  try {
    // Send email using SMTP
    const info = await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || "luqmanali05@hotmail.com",
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f4f4f4; padding: 20px; border-radius: 10px;">
            <h2 style="color: #2c3e50; margin-bottom: 20px;">New Contact Form Submission</h2>
            <div style="background-color: white; padding: 20px; border-radius: 5px;">
              <p style="margin: 10px 0;"><strong style="color: #2c3e50;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #2c3e50;">Email:</strong> <a href="mailto:${email}" style="color: #3498db;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #2c3e50;">Subject:</strong> ${subject}</p>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #f4f4f4;">
                <p style="margin: 10px 0;"><strong style="color: #2c3e50;">Message:</strong></p>
                <p style="margin: 10px 0; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</p>
              </div>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #7f8c8d; text-align: center;">
              This email was sent from the contact form at luqmanali.com
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission

        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    console.log("Email sent:", info.messageId);

    return {
      success: true,
      data: info,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
