import { cva, type VariantProps } from "@/cva";

export const section = cva({
  base: "flex flex-col gap-4 py-2",
});

type SectionVariants = VariantProps<typeof section>;

type SectionProps = React.ComponentProps<"section"> & {
  variants?: SectionVariants;
};

export function Section({ variants, className, ...props }: SectionProps) {
  return <section className={section({ ...variants, className })} {...props} />;
}
