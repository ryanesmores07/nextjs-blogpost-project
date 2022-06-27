const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "ryaaan7",
        mongodb_password: "eCzyynwoWqwy6OQ0",
        mongodb_clustername: "cluster0",
        mongodb_database: "nextjs-blog-project-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "ryaaan7",
      mongodb_password: "eCzyynwoWqwy6OQ0",
      mongodb_clustername: "cluster0",
      mongodb_database: "nextjs-blog-project",
    },
  };
};
