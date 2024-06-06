import { RocketIcon, CheckIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Page() {
  return (
    <div className="grid gap-3">
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>
          Puede agregar componentes a su aplicación usando cli.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>
          Puede agregar componentes a su aplicación usando cli.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <CheckIcon className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Puede agregar componentes a su aplicación usando cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
