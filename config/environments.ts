export default {
  staging: {
    url: "https://staging.companyprofile.com",
    apiKey: process.env.STAGING_API_KEY || "",
  },
  production: {
    url: "https://www.companyprofile.com",
    apiKey: process.env.PRODUCTION_API_KEY || "",
  },
};
