import type { ComponentProps } from "react";

import { createLink, type LinkComponent } from "@tanstack/react-router";

type ExternalLinkProps = React.ComponentProps<"a"> & { href: `https://${string}` };

function ExternalLink(props: ExternalLinkProps) {
  return <a rel="noopener noreferrer" target="_blank" {...props} />;
}

type BaseLinkComponentProps = ComponentProps<"a">;

function BaseLinkComponent({ ref, ...props }: BaseLinkComponentProps) {
  return <a ref={ref} {...props} />;
}

const Comp = createLink(BaseLinkComponent);

const Link: LinkComponent<typeof BaseLinkComponent> = (props) => {
  return <Comp {...props} />;
};

export { ExternalLink, Link };
