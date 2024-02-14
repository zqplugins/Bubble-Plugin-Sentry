function(properties, context) {
  const asyncFunction = async (callback) => {
    let dsn = properties.dsn;
    if (Window.sentry_initialized) {
      Sentry.close(100).then(function () {
        initSentry(dsn, Window.sentry_replay);
      });
    } else {
      Window.sentry_initialized = true;
      Window.sentry_replay = new Sentry.Integrations.Replay();


      initSentry(dsn, Window.sentry_replay);
    }

    function initSentry(dsn, replay) {
      let environment = appquery.app_version();
      let release = appquery.last_change();
      let current = Lib().current_user();

      let user = {
        id: current.id,
        email: current.get_email(),
      };

      Sentry.setUser(user);

      Sentry.init({
    dsn: dsn,
    debug: false,
    integrations:[
        new Sentry.BrowserTracing(),
        new Sentry.Integrations.CaptureConsole({levels: ["error"]}),
        Window.sentry_replay
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,  
    environment: environment,
    release: release,
  });
    }
  };
  asyncFunction();
}