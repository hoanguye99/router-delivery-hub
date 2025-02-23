import { cva, cx, type VariantProps } from "class-variance-authority";

const emptyViewStyles = cva(
  "rounded-lg flex flex-col items-center justify-center h-full [&>img]:select-none [&>img]:pointer-events-none",
  {
    variants: {
      variant: {
        solid: "border border-border-2 bg-grey-1",
        dash: "border border-dashed border-border-1 bg-white",
        "transparent-background": "bg-white",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
      textSize: {
        small: "[&>h5]:text-heading-8 [&>h5]:mt-2 [&>p]:text-caption-1 [&>p]:mt-1",
        large: "[&>h5]:text-heading-6 [&>p]:text-subtitle-2 [&>p]:mt-2",
        extra: "[&>h5]:text-heading-3 [&>p]:text-subtitle-1 [&>p]:mt-4",
      },
    },
    defaultVariants: {
      variant: "transparent-background",
      fullWidth: true,
      textSize: "large",
    },
  },
);

export const EmptyView = ({
  className,
  variant,
  fullWidth,
  textSize,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyViewStyles>) => {
  return (
    <div className={emptyViewStyles({ variant, fullWidth, textSize, className })} {...props} />
  );
};

export const EmptyViewTitle = ({ className, ...props }: React.ComponentProps<"h5">) => (
  <h5
    className={cx(
      "text-typography-title tracking-tight text-center text-pretty w-10/12",
      className,
    )}
    {...props}
  />
);

export const EmptyViewDescription = ({ className, ...props }: React.ComponentProps<"p">) => (
  <p
    className={cx("text-typography-subtitle text-center text-pretty w-3/4", className)}
    {...props}
  />
);
