module.exports = {
    apps : [{
      name: "my-web-app",
      script: "serve",
      args: ["-s", "build", "-p", "5500"],
      env: {
        NODE_ENV: "production",
      },
    }]
  }
  