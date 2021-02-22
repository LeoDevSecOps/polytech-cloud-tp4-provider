module.exports = {
  name: process.env.NAME || "Leo",
  port: process.env.PORT || 8081,
  host: process.env.HOST || 'http://localhost',
  register_url: process.env.API_REGISTER || 'https://app-63253679-f9ca-444c-ac1a-f7d17fcfed2c.cleverapps.io/providers'
}
  