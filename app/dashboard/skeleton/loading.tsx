import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export default function Loading() {
  const data = Array.from({ length: 9 });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <Card className="shadow" key={index}>
          <CardHeader className="flex-row">
            <Skeleton className="rounded-full mr-2 w-10 h-10" />
            <div className="flex flex-col flex-grow">
              <Skeleton className="h-5 w-1/2 mb-2" />
              <Skeleton className="h-4 w-full" />
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Skeleton className="h-9 w-20" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
