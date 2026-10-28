type Metatag = {
  url: string;
  type?: string;
  title: string;
  author?: string;
  description?: string;
  keywords?: string[];
  image?: OGImage;
};

type OGImage = {
  url: string;
  type?: string;
  height: number;
  width: number;
  alt: string;
};

export function seo(meta: Metatag) {
  const tags = [
    { title: meta.title },
    { content: meta.author ?? "Jacob Bolden", name: "author" },
    { content: meta.description, name: "description" },

    { content: meta.type || "website", name: "og:type" },
    { content: meta.title, name: "og:title" },
    { content: meta.url, name: "og:url" },
    { content: meta.description, name: "og:description" },

    { content: meta.title, name: "twitter:title" },
    { content: meta.description, name: "twitter:description" },
    { content: meta.url, name: "twitter:url" },
    { content: "summary_large_image", name: "twitter:card" },
  ];

  if (meta.keywords) {
    tags.push({
      content: meta.keywords.join(", "),
      name: "keywords",
    });
  }

  if (meta.image) {
    tags.push(
      { content: meta.image.url, name: "twitter:image" },
      { content: meta.image.url, name: "og:image" },
      { content: meta.image.type || "image/png", name: "og:image:type" },
      { content: `${meta.image.width}`, name: "og:image:width" },
      { content: `${meta.image.height}`, name: "og:image:height" },
      { content: meta.image.alt, name: "og:image:alt" },
    );
  }

  return tags;
}
