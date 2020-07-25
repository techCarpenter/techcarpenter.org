// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "TechCarpenter",
  siteDescription: "",
  siteUrl: "techcarpenter.org",
  templates: {
    Blog: "/blog/:slug",
    Tag: "/tag/:id",
  },
  plugins: [
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        exclude: [],
        config: {
          "/blog/*": {
            changefreq: "weekly",
            priority: 0.5,
            lastmod: "2020-02-19",
          },
          "/about": {
            changefreq: "monthly",
            priority: 0.7,
            lastmod: "2020-05-12",
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Blog",
        baseDir: "./content/blog",
        pathPrefix: "/blog",
        path: "*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
    },
  },
};
