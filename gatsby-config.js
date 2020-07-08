module.exports = {
	siteMetadata: {
		title: '网站任意门'
	},
	plugins: [
		'gatsby-plugin-layout',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-load-script',
			options: {
			  src: '/web.js', // Change to the script filename
			},
		  },
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: '#f09a7a',
				showSpinner: false
			}
		},
		'gatsby-transformer-json',
		'gatsby-transformer-remark',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`
			}
		},
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-netlify'
	]
};
