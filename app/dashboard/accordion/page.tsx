import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  const items = [
    {
      id: "item-1",
      question: "¿Es accesible?",
      answer: "Sí. Se adhiere al patrón de diseño WAI-ARIA.",
    },
    {
      id: "item-2",
      question: "¿Tiene estilo?",
      answer:
        "Sí. Viene con estilos predeterminados que coinciden con los demás componentes estético.",
    },
    {
      id: "item-3",
      question: "¿Está animado?",
      answer:
        "Sí. Está animado de forma predeterminada, pero puedes desactivarlo si lo prefieres.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <AccordionItem value={item.id} key={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
