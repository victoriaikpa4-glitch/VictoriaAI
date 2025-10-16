import type { Express } from "express";
import { createServer, type Server } from "http";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function registerRoutes(app: Express): Promise<Server> {
  // ✅ Define Gemini API route
  app.post("/api/chat", async (req, res) => {
    try {
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const userPrompt = req.body.prompt || "Hello! Who are you?";
      const result = await model.generateContent(userPrompt);
      const response = result.response.text();

      res.json({ reply: response });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
