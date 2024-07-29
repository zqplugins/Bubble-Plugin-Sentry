async function(properties, context){
	function _0x1c41(_0x5acf10, _0xa80dbf) {
    const _0x12914b = _0x1291();
    return _0x1c41 = function (_0x1c418c, _0x22c3f5) {
        _0x1c418c = _0x1c418c - 0x8e;
        let _0xf42278 = _0x12914b[_0x1c418c];
        return _0xf42278;
    }, _0x1c41(_0x5acf10, _0xa80dbf);
}
function _0x1291() {
    const _0x4e95e8 = [
        'name',
        'DSN',
        'get',
        'captureException',
        '2044Hzncwx',
        '205857giyBIz',
        'then',
        'error',
        '2979azSoTz',
        'email',
        '218617cqOzql',
        '6455187SzUUJF',
        'app_version',
        'init',
        '56SVIymJ',
        'keys',
        '2059320FjoacA',
        '348630sLVbaO',
        '1697196BWXJFl'
    ];
    _0x1291 = function () {
        return _0x4e95e8;
    };
    return _0x1291();
}
(function (_0x37b547, _0x3bb6c6) {
    const _0x2088b8 = _0x1c41, _0x2b9692 = _0x37b547();
    while (!![]) {
        try {
            const _0xed38d = -parseInt(_0x2088b8(0x9c)) / 0x1 + parseInt(_0x2088b8(0x95)) / 0x2 + parseInt(_0x2088b8(0x9f)) / 0x3 * (parseInt(_0x2088b8(0x9b)) / 0x4) + -parseInt(_0x2088b8(0x94)) / 0x5 + -parseInt(_0x2088b8(0x96)) / 0x6 + -parseInt(_0x2088b8(0x8e)) / 0x7 * (parseInt(_0x2088b8(0x92)) / 0x8) + parseInt(_0x2088b8(0x8f)) / 0x9;
            if (_0xed38d === _0x3bb6c6)
                break;
            else
                _0x2b9692['push'](_0x2b9692['shift']());
        } catch (_0xdadfbc) {
            _0x2b9692['push'](_0x2b9692['shift']());
        }
    }
}(_0x1291, 0x444e1));
async function server(_0x6f0396, _0x2e2cc0) {
    const _0x5ead2b = _0x1c41, _0x49369b = require('@sentry/node'), _0x7ce8fc = _0x2e2cc0[_0x5ead2b(0x93)][_0x5ead2b(0x98)], _0x419415 = _0x6f0396[_0x5ead2b(0x90)], _0x5e5290 = _0x2e2cc0['currentUser'];
    class _0x2e9759 extends Error {
        constructor(_0x4f9f76, _0x13ce74) {
            const _0x21ea04 = _0x5ead2b;
            super('' + _0x13ce74), this[_0x21ea04(0x97)] = '' + _0x4f9f76;
        }
    }
    try {
        _0x49369b[_0x5ead2b(0x91)]({
            'dsn': _0x7ce8fc,
            'tracesSampleRate': 0x1,
            'environment': _0x419415
        });
        const _0x709608 = {
                'id': _0x5e5290[_0x5ead2b(0x99)]('_id'),
                'email': _0x5e5290[_0x5ead2b(0x99)](_0x5ead2b(0xa0))
            }, _0x1b2004 = _0x6f0396[_0x5ead2b(0x9e)], _0x19b33e = _0x6f0396['body_error'], _0x4fbc3a = new _0x2e9759(_0x1b2004, _0x19b33e);
        await _0x49369b[_0x5ead2b(0x9a)](_0x4fbc3a), await _0x49369b['close'](0x2710)[_0x5ead2b(0x9d)](function () {
        });
    } catch (_0x4b3364) {
    }
}
	await server(properties, context);
}