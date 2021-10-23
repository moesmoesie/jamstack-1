module.exports = function() {
    return { 
        eleventyComputed:{
            script : (data) => {
                return data.page.fileSlug
            }
        }
    }
};