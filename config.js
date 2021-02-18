module.exports = {
  port: process.env.PORT || 8081,
  host: process.env.HOST || 'http://localhost',
  register_url: process.env.API_REGISTER || 'http://localhost:8082/providers'
}
  