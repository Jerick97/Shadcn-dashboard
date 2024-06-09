"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function Page() {
  const [terms, setTerms] = useState(false);

  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        id="terms1"
        checked={terms}
        onCheckedChange={(value: boolean) => setTerms(value)}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Aceptar terminos y condiciones
        </label>
        <p className="text-sm text-muted-foreground">
          Aceptas nuestros Términos de servicio y Política de privacidad.
        </p>
        {terms ? (
          <Badge>¡Excelente!</Badge>
        ) : (
          <Badge variant="secondary">¡Advertencia!</Badge>
        )}
      </div>
    </div>
  );
}
