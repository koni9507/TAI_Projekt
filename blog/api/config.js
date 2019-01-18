const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://konitest:konitest1@ds149344.mlab.com:49344/konitest',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
