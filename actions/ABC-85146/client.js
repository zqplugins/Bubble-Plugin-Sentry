function(properties, context) {
  let category = properties.category;
  let message = context.message;
  let level = context.level;
    
  let timestamp = Math.floor(Date.now() / 1000);
    
  let objs = properties.data.map(({ key, value }) => {
    return { [key]: value }
  });
    
  let data = objs.reduce((a, b) => Object.assign(a, b), {});
    
  Sentry.addBreadcrumb({
    timestamp: timestamp,
    category: category,
    message: message,
    type: "info",
    level: level,
    data: data
  });
}