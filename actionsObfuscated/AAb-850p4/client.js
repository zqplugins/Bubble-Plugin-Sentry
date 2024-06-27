function(properties, context){
	function _0x30bd(_0x3224a2, _0x2e100f) {
    const _0x438088 = _0x4380();
    return _0x30bd = function (_0x30bde6, _0x44e869) {
        _0x30bde6 = _0x30bde6 - 0x1a1;
        let _0x4f9d96 = _0x438088[_0x30bde6];
        return _0x4f9d96;
    }, _0x30bd(_0x3224a2, _0x2e100f);
}
function _0x4380() {
    const _0x1b6109 = [
        'get',
        '405380RSVfRM',
        '4790SjJMMN',
        '8559ENGGTa',
        '89ItERbm',
        '10670FAgTRV',
        '291196SbkWZf',
        'email',
        '877416qrRGfd',
        '_id',
        '1264152GDaSWA',
        'message',
        '14buKKYS',
        'setUser',
        '643563ApQNsn'
    ];
    _0x4380 = function () {
        return _0x1b6109;
    };
    return _0x4380();
}
(function (_0x116eb1, _0x309a0e) {
    const _0x4ab526 = _0x30bd, _0x3b5e59 = _0x116eb1();
    while (!![]) {
        try {
            const _0x16da1d = parseInt(_0x4ab526(0x1a4)) / 0x1 * (-parseInt(_0x4ab526(0x1a2)) / 0x2) + parseInt(_0x4ab526(0x1ae)) / 0x3 + -parseInt(_0x4ab526(0x1a6)) / 0x4 + -parseInt(_0x4ab526(0x1a1)) / 0x5 + -parseInt(_0x4ab526(0x1a8)) / 0x6 + -parseInt(_0x4ab526(0x1ac)) / 0x7 * (parseInt(_0x4ab526(0x1aa)) / 0x8) + -parseInt(_0x4ab526(0x1a3)) / 0x9 * (-parseInt(_0x4ab526(0x1a5)) / 0xa);
            if (_0x16da1d === _0x309a0e)
                break;
            else
                _0x3b5e59['push'](_0x3b5e59['shift']());
        } catch (_0x423bf1) {
            _0x3b5e59['push'](_0x3b5e59['shift']());
        }
    }
}(_0x4380, 0x61a3e));
function client(_0x232eb9, _0x46dac4) {
    const _0x2b4629 = _0x30bd;
    let _0x19bdb1 = _0x232eb9[_0x2b4629(0x1ab)], _0x543220 = _0x46dac4['currentUser'], _0x5a78b5 = {
            'id': _0x543220[_0x2b4629(0x1af)](_0x2b4629(0x1a9)),
            'email': _0x543220[_0x2b4629(0x1af)](_0x2b4629(0x1a7))
        };
    Sentry['withScope'](_0x41d1a0 => {
        const _0x1cbe5e = _0x2b4629;
        _0x41d1a0[_0x1cbe5e(0x1ad)](_0x5a78b5), Sentry['captureMessage'](_0x19bdb1);
    });
}
	 client(properties, context);
}