import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize Gemini
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

  // Chat endpoint
  app.post("/api/chat", async (req: Request, res: Response) => {
    try {
      const userMessage = req.body.message;
      if (!userMessage) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Generate response from Gemini
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(userMessage);

      const aiResponse = result.response.text();
      res.json({ reply: aiResponse });
    } catch (error: any) {
      console.error("Gemini API error:", error);
      res.status(500).json({ error: "Failed to generate response" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
