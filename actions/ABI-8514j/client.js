function(properties, context) {
  if (!properties.event) return;
  if (properties.event === "") return;

  let params = {};

  if (properties.title) {
    params.title = properties.title;
  }

  if (properties.sub_title_one) {
    params.subtitle = properties.sub_title_one;
  }

  if (properties.sub_title_two) {
    params.subtitle2 = properties.sub_title_two;
  }

  if (properties.submit_label) {
    params.labelSubmit = properties.submit_label;
  }

  let user = {};

  if (properties.user_name) {
    user.name = properties.user_name;
  }

  if (properties.user_email) {
    user.email = properties.user_email;
  }

  Sentry.withScope((scope) => {
    scope.setTag("mechanism", "feedback");

    let event = Sentry.captureMessage(properties.event);

    Sentry.showReportDialog({
      eventId: event,
      ...params,
      ...user,
    });
  });
}