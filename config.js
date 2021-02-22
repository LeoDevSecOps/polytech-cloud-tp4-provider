module.exports = {
  name: process.env.NAME || "Leo",
  port: process.env.PORT || 8081,
  host: process.env.HOST || 'http://localhost',
  register_url: process.env.API_REGISTER || 'https://app-63253679-f9ca-444c-ac1a-f7d17fcfed2c.cleverapps.io/providers',
  register_master_url: process.env.API_MASTER_REGISTER || 'https://app-aee3dbf0-7936-4560-be94-5b1484dfd0c2.cleverapps.io/providers'
}
  