function(properties, context){
	function _0x101f(_0x4bb107, _0x284b75) {
    const _0xadc523 = _0xadc5();
    return _0x101f = function (_0x101fc2, _0x9c4f33) {
        _0x101fc2 = _0x101fc2 - 0x98;
        let _0x1da7bb = _0xadc523[_0x101fc2];
        return _0x1da7bb;
    }, _0x101f(_0x4bb107, _0x284b75);
}
function _0xadc5() {
    const _0x3c64d6 = [
        'app_version',
        '5igHBrc',
        'sentry_replay',
        'then',
        'current_user',
        'Replay',
        '1580680JEFFEX',
        '19925220zVyHqG',
        '34392vhADsT',
        '715543lXKKTq',
        '609eWJDlZ',
        'Integrations',
        'close',
        'sentry_initialized',
        'init',
        '3147360oEQQaW',
        '1149658Bxhrza',
        'error',
        'dsn',
        'last_change',
        '1979901SUDHRM',
        '3OvLSyy'
    ];
    _0xadc5 = function () {
        return _0x3c64d6;
    };
    return _0xadc5();
}
(function (_0x5c752c, _0x315496) {
    const _0x481fed = _0x101f, _0x5d67b7 = _0x5c752c();
    while (!![]) {
        try {
            const _0x3495a8 = -parseInt(_0x481fed(0x9b)) / 0x1 + -parseInt(_0x481fed(0xa2)) / 0x2 + parseInt(_0x481fed(0xa7)) / 0x3 * (-parseInt(_0x481fed(0x98)) / 0x4) + parseInt(_0x481fed(0xa9)) / 0x5 * (-parseInt(_0x481fed(0xa1)) / 0x6) + -parseInt(_0x481fed(0x9c)) / 0x7 * (-parseInt(_0x481fed(0x9a)) / 0x8) + parseInt(_0x481fed(0xa6)) / 0x9 + parseInt(_0x481fed(0x99)) / 0xa;
            if (_0x3495a8 === _0x315496)
                break;
            else
                _0x5d67b7['push'](_0x5d67b7['shift']());
        } catch (_0x5d0284) {
            _0x5d67b7['push'](_0x5d67b7['shift']());
        }
    }
}(_0xadc5, 0x5be66));
function client(_0x3429fd, _0x2239cb) {
    const _0x148833 = async _0x2a47bb => {
        const _0x57b968 = _0x101f;
        let _0x27f6b3 = _0x3429fd[_0x57b968(0xa4)];
        window['sentry_initialized'] ? Sentry[_0x57b968(0x9e)](0x64)[_0x57b968(0xab)](function () {
            const _0x59b90b = _0x57b968;
            _0x2d1ae7(_0x27f6b3, window[_0x59b90b(0xaa)]);
        }) : (window[_0x57b968(0x9f)] = !![], window[_0x57b968(0xaa)] = new Sentry[(_0x57b968(0x9d))][(_0x57b968(0xad))](), _0x2d1ae7(_0x27f6b3, window[_0x57b968(0xaa)]));
        function _0x2d1ae7(_0x373fc3, _0x1107b6) {
            const _0x21a183 = _0x57b968;
            let _0x3fbe02 = appquery[_0x21a183(0xa8)](), _0x3a4b31 = appquery[_0x21a183(0xa5)](), _0x532927 = Lib()[_0x21a183(0xac)](), _0x39b6bd = {
                    'id': _0x532927['id'],
                    'email': _0x532927['get_email']()
                };
            Sentry['setUser'](_0x39b6bd), Sentry[_0x21a183(0xa0)]({
                'dsn': _0x373fc3,
                'debug': ![],
                'integrations': [
                    new Sentry['BrowserTracing'](),
                    new Sentry[(_0x21a183(0x9d))]['CaptureConsole']({ 'levels': [_0x21a183(0xa3)] }),
                    window[_0x21a183(0xaa)]
                ],
                'tracesSampleRate': 0x1,
                'replaysSessionSampleRate': 0x1,
                'replaysOnErrorSampleRate': 0x1,
                'environment': _0x3fbe02,
                'release': _0x3a4b31
            });
        }
    };
    _0x148833();
}
	 client(properties, context);
}