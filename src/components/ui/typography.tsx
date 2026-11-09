import { cva, type VariantProps } from "@/cva";

export const h1 = cva({
  base: "font-display text-2xl font-bold",
});

export const h2 = cva({
  base: "font-display my-4 text-xl font-bold",
});

export const p = cva({
  base: "font-sans",
  variants: {
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type TypographyH1Props = React.ComponentProps<"h1"> & {
  variants?: VariantProps<typeof h1>;
};

type TypographyH2Props = React.ComponentProps<"h2"> & {
  variants?: VariantProps<typeof h2>;
};

type TypographyPProps = React.ComponentProps<"p"> & {
  variants?: VariantProps<typeof p>;
};

export function TypographyH1({ variants, className, ...props }: TypographyH1Props) {
  return <h1 className={h1({ ...variants, className })} {...props} />;
}

export function TypographyH2({ variants, className, ...props }: TypographyH2Props) {
  return <h2 className={h2({ ...variants, className })} {...props} />;
}

export function TypographyP({ variants, className, ...props }: TypographyPProps) {
  return <p className={p({ ...variants, className })} {...props} />;
}
