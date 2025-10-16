import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface SubjectCardProps {
  icon: LucideIcon;
  title: string;
  topics: string[];
  color: string;
}

export function SubjectCard({ icon: Icon, title, topics, color }: SubjectCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all">
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-2xl font-heading font-semibold pt-2">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Badge key={topic} variant="secondary" className="text-sm">
            {topic}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
