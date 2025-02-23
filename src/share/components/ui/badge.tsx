import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/share/lib/utils";

const badgeVariants = cva("w-fit flex justify-center items-center border", {
  variants: {
    variant: {
      primary: "bg-primary text-white",
      light: "",
      // secondary: 'bg-info-background border-info-border text-info-base',
      disabled: "bg-grey-disabled border-border-1 text-typography-disabled",
    },
    size: {
      large: "h-10 px-4 gap-2",
      medium: "h-8 px-3 gap-2",
      small: "h-6 px-2 gap-1.5",
      sm: "h-7 px-2.5 gap-1.5",
    },
    iconOnly: {
      true: "rounded-full aspect-square !px-0",
    },
    boxy: {
      true: "rounded-lg",
      false: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    boxy: false,
    iconOnly: false,
    size: "small",
  },
});

function Badge({
  className,
  variant,
  size,
  iconOnly,
  boxy,
  asChild,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, iconOnly, boxy }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
