
const config = {};
config.host = process.env.HOST || "https://amine37.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "VqguDXpd9vxVsAR4pkTvFv0DKCYwFamvyiKs045wn4yraog2Spa89NYgvGNLxzYe4tEaYiAnEt5HACDbuvMhVw==";
config.databaseId = "ToDoList";
config.containerId = "Items";
if (config.host.includes("https://localhost:")) {
 console.log("Local environment detected");
 console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
 process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
 console.log(`Go to http://localhost:${process.env.PORT || '3000'} to
try the sample.`);
}
module.exports = config;