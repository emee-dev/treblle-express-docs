const withNextra = require("nextra")({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
	images: {
		remotePatterns: [
			// {
			// 	protocol: "https",
			// 	hostname: "res.cloudinary.com",
			// 	pathname: "/dxxswax97/image/upload/**",
			// },
			{
				protocol: "https",
				hostname: "docs.codacy.com",
				pathname: "/organizations/images/**",
			},
		],
	},
});
