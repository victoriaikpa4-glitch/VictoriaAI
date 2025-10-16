import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@assets/stock_images/students_learning_wi_5e105d7e.jpg";

export function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 md:py-24 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="h-8 w-8 text-primary" />
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white">
            VictoriaAI
          </h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-4">
          Your Friendly AI Tutor for STEM
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Master Science, Technology, Engineering, and Mathematics with personalized AI-powered lessons. Get instant answers, take quizzes, and learn at your own pace.
        </p>
        
        <Button
          size="lg"
          onClick={onGetStarted}
          className="rounded-full px-8 py-6 text-lg font-medium shadow-xl hover:shadow-2xl transition-shadow"
          data-testid="button-get-started"
        >
          Start Learning Free
        </Button>
      </div>
    </section>
  );
}
