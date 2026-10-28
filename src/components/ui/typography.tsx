import { tv, type VariantProps } from "tailwind-variants";

export const h1 = tv({
  base: "font-display text-2xl font-bold",
});

export const h2 = tv({
  base: "font-display my-4 text-xl font-bold",
});

export const p = tv({
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

type TypographyH1Variants = VariantProps<typeof h1>;

interface TypographyH1Props extends TypographyH1Variants {
  children: React.ReactNode;
  className?: string;
}

type TypographyH2Variants = VariantProps<typeof h2>;

interface TypographyH2Props extends TypographyH2Variants {
  children: React.ReactNode;
  className?: string;
}

type TypographyPVariants = VariantProps<typeof p>;

interface TypographyPProps extends TypographyPVariants {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className, ...variants }: TypographyH1Props) {
  return <h1 className={h1({ ...variants, className })}>{children}</h1>;
}

export function TypographyH2({ children, className, ...variants }: TypographyH2Props) {
  return <h2 className={h2({ ...variants, className })}>{children}</h2>;
}

export function TypographyP({ children, className, ...variants }: TypographyPProps) {
  return <p className={p({ ...variants, className })}>{children}</p>;
}
