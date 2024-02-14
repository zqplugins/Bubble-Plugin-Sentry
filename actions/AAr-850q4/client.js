function(properties, context) {
  let error = new Error(properties.error);
  let current = context.currentUser;

  let user = {
    id: current.get("_id"),
    email: current.get("email"),
  };

  Sentry.withScope((scope) => {
    scope.setUser(user);
    Sentry.captureException(error);
  });
}