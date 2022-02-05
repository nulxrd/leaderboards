module.exports = {
  apps : [{
    name: 'Backend App',
    script: './src/index.js',
    autorestart: true,
    watch: true,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
      NODE_PORT: 3000
    }
  }]
};
