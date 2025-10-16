import { useState } from "react";
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { SubjectCard } from "@/components/SubjectCard";
import { ChatInterface } from "@/components/ChatInterface";
import { QuizInterface } from "@/components/QuizInterface";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Brain,
  Zap,
  FlaskConical,
  Cpu,
  Cog,
  Calculator,
  Sparkles,
  BookOpen,
} from "lucide-react";

type Mode = "landing" | "chat" | "quiz";

export default function Home() {
  const [mode, setMode] = useState<Mode>("landing");

  if (mode === "chat") {
    return (
      <div className="h-screen flex flex-col">
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-heading font-bold">VictoriaAI</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setMode("quiz")}
              data-testid="button-switch-quiz"
            >
              Quiz Mode
            </Button>
            <Button
              variant="ghost"
              onClick={() => setMode("landing")}
              data-testid="button-back-home"
            >
              Home
            </Button>
            <ThemeToggle />
          </div>
        </header>
        <div className="flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </div>
    );
  }

  if (mode === "quiz") {
    return (
      <div className="h-screen flex flex-col">
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-heading font-bold">VictoriaAI</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setMode("chat")}
              data-testid="button-switch-chat"
            >
              Chat Mode
            </Button>
            <Button
              variant="ghost"
              onClick={() => setMode("landing")}
              data-testid="button-back-home"
            >
              Home
            </Button>
            <ThemeToggle />
          </div>
        </header>
        <div className="flex-1 overflow-hidden">
          <QuizInterface />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur-lg border-b bg-background/80">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-heading font-bold">VictoriaAI</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <Hero onGetStarted={() => setMode("chat")} />

      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Learning STEM has never been easier with your personal AI tutor
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={MessageCircle}
              title="Ask Questions"
              description="Get instant, easy-to-understand answers on any STEM topic from your AI tutor."
            />
            <FeatureCard
              icon={Brain}
              title="Learn by Chatting"
              description="Study in a friendly, conversational way — just like talking to a real teacher."
            />
            <FeatureCard
              icon={Zap}
              title="Quiz Me Mode"
              description="Test your knowledge with custom quizzes and get instant feedback."
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-4">
            Subject Areas
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Master every aspect of STEM with comprehensive coverage
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <SubjectCard
              icon={FlaskConical}
              title="Science"
              topics={["Biology", "Chemistry", "Physics", "Earth Science"]}
              color="bg-chart-1"
            />
            <SubjectCard
              icon={Cpu}
              title="Technology"
              topics={["Coding", "AI Basics", "Web Development", "Cybersecurity"]}
              color="bg-chart-2"
            />
            <SubjectCard
              icon={Cog}
              title="Engineering"
              topics={["Mechanics", "Robotics", "Design", "Electronics"]}
              color="bg-chart-3"
            />
            <SubjectCard
              icon={Calculator}
              title="Mathematics"
              topics={["Algebra", "Geometry", "Statistics", "Calculus"]}
              color="bg-chart-4"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Perfect For Every Learner
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're a student in primary, junior, or secondary school, a teacher looking for classroom assistance, or a parent seeking a safe learning companion — VictoriaAI is here to help you succeed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-base">Students</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base">Teachers</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base">Parents</Badge>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-4 bg-gradient-to-br from-primary/10 via-chart-2/10 to-chart-4/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Begin Your Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start exploring STEM topics with VictoriaAI today. It's free, fun, and always available!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setMode("chat")}
              className="rounded-full px-8 py-6 text-lg font-medium shadow-xl"
              data-testid="button-start-chatting"
            >
              Start Chatting
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setMode("quiz")}
              className="rounded-full px-8 py-6 text-lg font-medium"
              data-testid="button-take-quiz"
            >
              Take a Quiz
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-heading font-bold">VictoriaAI</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Your friendly AI tutor for Science, Math & Technology
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 VictoriaAI. Making STEM learning simple and fun.
          </p>
        </div>
      </footer>
    </div>
  );
}
