function(properties, context) {
  let Sentry = require("@sentry/node");

  let dsn = context.keys["DSN"];
  let environment = properties.app_version;
  let current = context.currentUser;

  context.v3.async((callback) => {
    try {
      Sentry.init({
        dsn: dsn,
        tracesSampleRate: 1.0,
        environment: environment,
      });

      let user = {
        id: current.get("_id"),
        email: current.get("email"),
      };

      Sentry.setUser(user);

      let event = Sentry.captureMessage(properties.error);

      Sentry.close(10000).then(function () {
        callback(null, event);
      });
    } catch (error) {
      callback(error);
    }
  });
}