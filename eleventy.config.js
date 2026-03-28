export default function (eleventyConfig) {
  // Copy static asset folders to _site/ unchanged
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("CNAME");

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
