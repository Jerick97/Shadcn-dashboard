"use client";
import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button variant="success">Success</Button>
      <Button variant="outline" size="icon" className="mx-auto">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button onClick={() => console.log("Hola Mundo")}>Click Me!</Button>
      <Button capitalize={false}>capitalize false</Button>
    </div>
  );
}
