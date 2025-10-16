import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-heading font-semibold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
