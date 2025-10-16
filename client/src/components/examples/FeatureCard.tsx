import { FeatureCard } from "../FeatureCard";
import { MessageCircle } from "lucide-react";

export default function FeatureCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <FeatureCard
        icon={MessageCircle}
        title="Ask Questions"
        description="Get instant, easy-to-understand answers on any STEM topic from your AI tutor."
      />
    </div>
  );
}
