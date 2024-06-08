"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDate] = React.useState<Date[] | undefined>(
    []
  );
  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return (
    <div className="flex md:flex-row md:flex-wrap flex-col xl:grid grid-flow-col auto-cols-max gap-4">
      <div className="mx-auto">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6} //Deshabilita los Fines de Semana S y D
        />
      </div>
      <div className="mx-auto">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
          disabled={(date) => date > new Date()} //Deshabilita una fecha mayor al actual
        />
      </div>
      <div className="mx-auto">
        <Calendar
          mode="multiple"
          selected={multipleDates}
          onSelect={setMultipleDate}
          className="rounded-md border shadow"
        />
      </div>
      <div className="mx-auto p-10">
        <h1 className="text-3xl">Información</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <div className="whitespace-normal break-words">
          {multipleDates?.map((date, index) => (
            <p key={index} className="mr-1">
              {date.toLocaleDateString()}
              {index < multipleDates.length - 1 && ","}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
