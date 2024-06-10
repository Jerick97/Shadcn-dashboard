"use client";
import { useState } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function Page() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-[250px] max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-4">
          Verifica tu correo electrónico
        </h1>
        <p className="mb-4 text-gray-600">
          Hemos enviado un código de verificación a su dirección de correo
          electrónico. Por favor ingrese el código a continuación para verificar
          su correo electrónico.
        </p>
      </div>
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm my-3">
        {value === "" ? (
          <>Ingrese su código de un solo uso.</>
        ) : (
          <>Tu ingresaste: {value}</>
        )}
      </div>
    </div>
  );
}
