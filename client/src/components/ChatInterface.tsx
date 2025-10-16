import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Send, RotateCcw, Sparkles, User } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const subjects = ["Science", "Technology", "Engineering", "Mathematics"];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: "I'm a prototype! In the full app, I'll provide detailed STEM explanations using AI. Try asking about photosynthesis, coding, or algebra!",
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInput("");
  };

  const handleReset = () => {
    setMessages([]);
    setSelectedSubject(null);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between p-4 border-b gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {subjects.map((subject) => (
            <Badge
              key={subject}
              variant={selectedSubject === subject ? "default" : "outline"}
              className="cursor-pointer hover-elevate"
              onClick={() => setSelectedSubject(selectedSubject === subject ? null : subject)}
              data-testid={`badge-subject-${subject.toLowerCase()}`}
            >
              {subject}
            </Badge>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleReset}
          data-testid="button-reset-chat"
        >
          <RotateCcw className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
            <Sparkles className="h-16 w-16 text-primary" />
            <h3 className="text-2xl font-heading font-semibold">Ask me anything about STEM!</h3>
            <p className="text-muted-foreground max-w-md">
              I can explain complex concepts in simple terms. Try asking about photosynthesis, coding basics, or how to solve equations.
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "assistant" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-card border-2 border-border rounded-bl-md"
                }`}
                data-testid={`message-${message.role}`}
              >
                <p className="leading-relaxed">{message.content}</p>
              </div>
              {message.role === "user" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask a question about Science, Math, Technology..."
            className="resize-none"
            rows={2}
            data-testid="input-chat-message"
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="flex-shrink-0"
            data-testid="button-send-message"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
