function(properties, context){
	function _0x4387() {
    const _0x7a063d = [
        'error',
        '2NCGQGp',
        '888374xuDErU',
        'get',
        '6uKwuqq',
        'email',
        '10cmsBGQ',
        '13502929zxjPNS',
        '8635440epOmzL',
        'captureException',
        '3jnsyVK',
        '729445QCVcQm',
        'setUser',
        '1515357AcTXGZ',
        '_id',
        '24gEvGJq',
        '5087677YUaGNr',
        '1154444KNcgaH',
        'withScope'
    ];
    _0x4387 = function () {
        return _0x7a063d;
    };
    return _0x4387();
}
(function (_0x36b141, _0x4f605d) {
    const _0x3b0969 = _0x180e, _0x54e20b = _0x36b141();
    while (!![]) {
        try {
            const _0x265f2c = parseInt(_0x3b0969(0x193)) / 0x1 * (-parseInt(_0x3b0969(0x194)) / 0x2) + -parseInt(_0x3b0969(0x19c)) / 0x3 * (parseInt(_0x3b0969(0x190)) / 0x4) + -parseInt(_0x3b0969(0x19d)) / 0x5 + -parseInt(_0x3b0969(0x196)) / 0x6 * (-parseInt(_0x3b0969(0x18f)) / 0x7) + -parseInt(_0x3b0969(0x19a)) / 0x8 + -parseInt(_0x3b0969(0x19f)) / 0x9 * (parseInt(_0x3b0969(0x198)) / 0xa) + parseInt(_0x3b0969(0x199)) / 0xb * (parseInt(_0x3b0969(0x18e)) / 0xc);
            if (_0x265f2c === _0x4f605d)
                break;
            else
                _0x54e20b['push'](_0x54e20b['shift']());
        } catch (_0xc320cc) {
            _0x54e20b['push'](_0x54e20b['shift']());
        }
    }
}(_0x4387, 0x9538c));
function _0x180e(_0x2a8bb2, _0x36adc4) {
    const _0x438735 = _0x4387();
    return _0x180e = function (_0x180efb, _0x2a0e47) {
        _0x180efb = _0x180efb - 0x18d;
        let _0x164637 = _0x438735[_0x180efb];
        return _0x164637;
    }, _0x180e(_0x2a8bb2, _0x36adc4);
}
function client(_0xfdcf7a, _0x3c8283) {
    const _0xb6bb8b = _0x180e;
    let _0x2a0df8 = new Error(_0xfdcf7a[_0xb6bb8b(0x192)]), _0x211969 = _0x3c8283['currentUser'], _0x2182bf = {
            'id': _0x211969['get'](_0xb6bb8b(0x18d)),
            'email': _0x211969[_0xb6bb8b(0x195)](_0xb6bb8b(0x197))
        };
    Sentry[_0xb6bb8b(0x191)](_0x34203d => {
        const _0x1d3f0c = _0xb6bb8b;
        _0x34203d[_0x1d3f0c(0x19e)](_0x2182bf), Sentry[_0x1d3f0c(0x19b)](_0x2a0df8);
    });
}
	 client(properties, context);
}