import { tv, type VariantProps } from "tailwind-variants";

export const section = tv({
  base: "flex flex-col gap-4 py-2",
});

type SectionVariants = VariantProps<typeof section>;

interface SectionProps extends SectionVariants {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className, ...variants }: SectionProps) {
  return <section className={section({ ...variants, className })}>{children}</section>;
}
