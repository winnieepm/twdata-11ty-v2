module.exports = function(eleventyConfig) {
	const dataDir = './src/_data/';
	const fs = require('fs');
	const lunr = require('lunr');

	eleventyConfig.on('afterBuild', () => {
		let data = fs.readFileSync(dataDir + 'tweets.json','utf-8');
		let tweets = JSON.parse(data);

		let idx = lunr(function () {
			this.ref('id');
			this.field('text');
			this.field('user_id');

			Object.values(tweets).forEach(function (doc, idx) {
				doc.id = idx;
				this.add(doc);
			}, this);
		});

		fs.writeFileSync(dataDir + 'index.json', JSON.stringify(idx));
	});

	eleventyConfig.addPassthroughCopy('./src/css/');
	eleventyConfig.addPassthroughCopy('./src/js/');
	eleventyConfig.addPassthroughCopy('./src/_data/');
	eleventyConfig.addWatchTarget('./src/css/');
	eleventyConfig.addWatchTarget('./src/js/');
	return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};

