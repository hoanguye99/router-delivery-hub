import { cn } from "@/share/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-primary/10 animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export const TableSkeleton = (props: { numberRow?: number }) => {
  return (
    <>
      <div className="flex flex-col gap-5 p-1 rounded-lg">
        {[...Array(props.numberRow ?? 9)].map((_, index) => (
          <Skeleton key={index} className="h-8" />
        ))}
      </div>
    </>
  );
};

export { Skeleton };
