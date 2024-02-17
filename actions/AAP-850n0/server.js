async function(properties, context) {
    const Sentry = require("@sentry/node");

    const dsn = context.keys["DSN"];
    const environment = properties.app_version;
    const current = context.currentUser;

    try {
        Sentry.init({
            dsn: dsn,
            tracesSampleRate: 1.0,
            environment: environment,
        });

        const user = {
            id: current.get("_id"),
            email: current.get("email"),
        };

        Sentry.setUser(user);

        let event = Sentry.captureMessage(properties.error);

        await Sentry.close(10000).then(function () {
            // console.log("success?");
        });
    } catch (error) {
        // console.log("error?" + error.message);
    }
}
