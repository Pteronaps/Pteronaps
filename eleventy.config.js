export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "_content",
      output: "_site",
      includes: "_includes",
    },
    // Process .html files as Liquid (default in v3 is null — must set explicitly)
    htmlTemplateEngine: "liquid",
  };
}
