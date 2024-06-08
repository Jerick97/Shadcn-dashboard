import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge>Default</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge capitalize variant="info">
        info
      </Badge>
      <Badge capitalize variant="success">
        success
      </Badge>
    </div>
  );
}
