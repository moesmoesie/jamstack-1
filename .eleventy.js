module.exports =  function(eleventyConfig)  {
    eleventyConfig.addPassthroughCopy({"src/images":"/images"});
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src/site/content",
            output: "_public",
            includes: "../_includes",
            data: "../_data"
        },
    }
};