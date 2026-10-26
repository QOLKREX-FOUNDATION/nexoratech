import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nexoratech.global/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
