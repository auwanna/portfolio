import { cn as merge } from "cn";
import { defineConfig, type VariantProps } from "cva/config";

const { cva, cx: cn } = defineConfig({ cx: merge });

export { cva, cn, type VariantProps };
