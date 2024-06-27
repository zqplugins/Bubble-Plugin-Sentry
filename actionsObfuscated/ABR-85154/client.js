function(properties, context){
	function _0xe50f(_0x29d768, _0x3cee03) {
    const _0x4f1de7 = _0x4f1d();
    return _0xe50f = function (_0xe50f2, _0x46a024) {
        _0xe50f2 = _0xe50f2 - 0x65;
        let _0x42bae8 = _0x4f1de7[_0xe50f2];
        return _0x42bae8;
    }, _0xe50f(_0x29d768, _0x3cee03);
}
(function (_0x4c6565, _0x54a49a) {
    const _0x250b4e = _0xe50f, _0x4b7969 = _0x4c6565();
    while (!![]) {
        try {
            const _0x2428c4 = -parseInt(_0x250b4e(0x69)) / 0x1 + parseInt(_0x250b4e(0x74)) / 0x2 + parseInt(_0x250b4e(0x68)) / 0x3 * (parseInt(_0x250b4e(0x71)) / 0x4) + parseInt(_0x250b4e(0x6a)) / 0x5 + -parseInt(_0x250b4e(0x70)) / 0x6 + -parseInt(_0x250b4e(0x79)) / 0x7 + parseInt(_0x250b4e(0x72)) / 0x8;
            if (_0x2428c4 === _0x54a49a)
                break;
            else
                _0x4b7969['push'](_0x4b7969['shift']());
        } catch (_0x5b891e) {
            _0x4b7969['push'](_0x4b7969['shift']());
        }
    }
}(_0x4f1d, 0x7bcd1));
function client(_0x45aba8, _0x2a66a7) {
    const _0x2c12b5 = async _0x2af3ec => {
        const _0x2a4beb = _0xe50f;
        let _0x2dc5ae = _0x45aba8['dsn'];
        window[_0x2a4beb(0x75)] ? Sentry[_0x2a4beb(0x66)](0x64)[_0x2a4beb(0x6d)](function () {
            const _0x1cbc6e = _0x2a4beb;
            _0x3632ef(_0x2dc5ae, window[_0x1cbc6e(0x6b)]);
        }) : (window[_0x2a4beb(0x75)] = !![], window[_0x2a4beb(0x6b)] = new Sentry['Integrations'][(_0x2a4beb(0x78))](), _0x3632ef(_0x2dc5ae, window['sentry_replay']));
        function _0x3632ef(_0x44b342, _0x3d5f7b) {
            const _0x523f1b = _0x2a4beb;
            let _0x5b1457 = appquery[_0x523f1b(0x73)](), _0x51458e = appquery[_0x523f1b(0x76)](), _0x2cda96 = Lib()['current_user'](), _0x4456ed = {
                    'id': _0x2cda96['id'],
                    'email': _0x2cda96[_0x523f1b(0x6f)]()
                };
            Sentry[_0x523f1b(0x67)](_0x4456ed), Sentry[_0x523f1b(0x6e)]({
                'dsn': _0x44b342,
                'debug': ![],
                'integrations': [
                    new Sentry['BrowserTracing'](),
                    new Sentry[(_0x523f1b(0x65))][(_0x523f1b(0x6c))]({ 'levels': [_0x523f1b(0x77)] }),
                    window[_0x523f1b(0x6b)]
                ],
                'tracesSampleRate': 0x1,
                'replaysSessionSampleRate': 0x1,
                'replaysOnErrorSampleRate': 0x1,
                'environment': _0x5b1457,
                'release': _0x51458e
            });
        }
    };
    _0x2c12b5();
}
function _0x4f1d() {
    const _0x40397e = [
        '811547RISdKq',
        '4031745ZNNrqP',
        'sentry_replay',
        'CaptureConsole',
        'then',
        'init',
        'get_email',
        '1606332foBbQO',
        '1402572phmMGZ',
        '823096MIIYSw',
        'app_version',
        '1745982ixSMmy',
        'sentry_initialized',
        'last_change',
        'error',
        'Replay',
        '3825584tqMBZo',
        'Integrations',
        'close',
        'setUser',
        '3JGwswL'
    ];
    _0x4f1d = function () {
        return _0x40397e;
    };
    return _0x4f1d();
}
	 client(properties, context);
}