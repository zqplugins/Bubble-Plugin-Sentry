function(properties, context) {
  let message = properties.message;
  let current = context.currentUser;

  let user = {
    id: current.get("_id"),
    email: current.get("email"),
  };

  Sentry.withScope((scope) => {
    scope.setUser(user);
    Sentry.captureMessage(message);
  });
}