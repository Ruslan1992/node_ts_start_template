export default {
  DB_NAME: process.env.DB_NAME ?? '',
  DB_USER: process.env.DB_USER ?? '',
  DB_PASSWORD: process.env.DB_PASSWORD ?? '',
  BCRYPT_SALT: process.env.BCRYPT_SALT ? parseInt(process.env.BCRYPT_SALT) : 8,
  PASSWORD_MIN: process.env.PASSWORD_MIN
    ? parseInt(process.env.PASSWORD_MIN)
    : 10001,
  PASSWORD_MAX: process.env.PASSWORD_MAX
    ? parseInt(process.env.PASSWORD_MAX)
    : 99999,
  SESSION_SECRET: process.env.SESSION_SECRET ?? '',
  MAILER_USER: process.env.MAILER_USER ?? '',
  MAILER_PASSWORD: process.env.MAILER_PASSWORD ?? '',
  BASE_URL: process.env.BASE_URL ?? '',
}
