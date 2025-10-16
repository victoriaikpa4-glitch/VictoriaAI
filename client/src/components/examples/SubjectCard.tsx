import { SubjectCard } from "../SubjectCard";
import { FlaskConical } from "lucide-react";

export default function SubjectCardExample() {
  return (
    <div className="p-6 max-w-md">
      <SubjectCard
        icon={FlaskConical}
        title="Science"
        topics={["Biology", "Chemistry", "Physics"]}
        color="bg-chart-1"
      />
    </div>
  );
}
