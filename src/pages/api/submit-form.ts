import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, email, phone, designation, organization, theme, problem, description } = req.body;

      if (!name || !email || !phone || !designation || !organization || !theme || !problem || !description) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

      const auth = new google.auth.JWT(
        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        undefined,
        privateKey,
        ["https://www.googleapis.com/auth/spreadsheets"]
      );

      await auth.authorize();

      const sheets = google.sheets({ version: "v4", auth });
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1!A:H",
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              name,
              email,
              phone,
              designation,
              organization,
              theme,
              problem,
              description,
            ],
          ],
        },
      });

      return res.status(200).json({ message: "Form data successfully submitted!" });
    } catch (error) {
      console.error("Error in POST handler:", error);
      return res.status(500).json({ message: "Internal server error", error: (error as any).message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}