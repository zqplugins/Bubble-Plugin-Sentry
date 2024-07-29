function(properties, context){
	(function (_0x3a2beb, _0x3b5758) {
    const _0x236102 = _0x4ba4, _0x2649fd = _0x3a2beb();
    while (!![]) {
        try {
            const _0x2c0a10 = parseInt(_0x236102(0xed)) / 0x1 * (parseInt(_0x236102(0xe5)) / 0x2) + -parseInt(_0x236102(0xf0)) / 0x3 + parseInt(_0x236102(0xe3)) / 0x4 * (-parseInt(_0x236102(0xe8)) / 0x5) + parseInt(_0x236102(0xf2)) / 0x6 * (-parseInt(_0x236102(0xec)) / 0x7) + parseInt(_0x236102(0xdc)) / 0x8 * (-parseInt(_0x236102(0xeb)) / 0x9) + parseInt(_0x236102(0xe0)) / 0xa * (-parseInt(_0x236102(0xe7)) / 0xb) + parseInt(_0x236102(0xe2)) / 0xc;
            if (_0x2c0a10 === _0x3b5758)
                break;
            else
                _0x2649fd['push'](_0x2649fd['shift']());
        } catch (_0x1c125c) {
            _0x2649fd['push'](_0x2649fd['shift']());
        }
    }
}(_0x4fc2, 0x40d48));
function client(_0x1226bf, _0x475cd0) {
    const _0x8452a2 = _0x4ba4;
    if (!_0x1226bf[_0x8452a2(0xef)])
        return;
    if (_0x1226bf[_0x8452a2(0xef)] === '')
        return;
    let _0x11f19c = {};
    _0x1226bf[_0x8452a2(0xf5)] && (_0x11f19c[_0x8452a2(0xf5)] = _0x1226bf[_0x8452a2(0xf5)]);
    _0x1226bf[_0x8452a2(0xe1)] && (_0x11f19c['subtitle'] = _0x1226bf[_0x8452a2(0xe1)]);
    _0x1226bf['sub_title_two'] && (_0x11f19c[_0x8452a2(0xe9)] = _0x1226bf[_0x8452a2(0xea)]);
    _0x1226bf['submit_label'] && (_0x11f19c[_0x8452a2(0xf4)] = _0x1226bf[_0x8452a2(0xe4)]);
    let _0x3eaed5 = {};
    _0x1226bf['user_name'] && (_0x3eaed5['name'] = _0x1226bf[_0x8452a2(0xf3)]), _0x1226bf['user_email'] && (_0x3eaed5[_0x8452a2(0xdf)] = _0x1226bf[_0x8452a2(0xe6)]), Sentry[_0x8452a2(0xf1)](_0xc9bc71 => {
        const _0x9f6953 = _0x8452a2;
        _0xc9bc71[_0x9f6953(0xde)](_0x9f6953(0xee), _0x9f6953(0xdd));
        let _0x415479 = Sentry['captureMessage'](_0x1226bf[_0x9f6953(0xef)]);
        Sentry['showReportDialog']({
            'eventId': _0x415479,
            ..._0x11f19c,
            ..._0x3eaed5
        });
    });
}
function _0x4ba4(_0x1e9eb7, _0xa278e2) {
    const _0x4fc280 = _0x4fc2();
    return _0x4ba4 = function (_0x4ba489, _0x4c294e) {
        _0x4ba489 = _0x4ba489 - 0xdc;
        let _0x40fd37 = _0x4fc280[_0x4ba489];
        return _0x40fd37;
    }, _0x4ba4(_0x1e9eb7, _0xa278e2);
}
function _0x4fc2() {
    const _0xeadfb2 = [
        'mechanism',
        'event',
        '1454463rGSMZW',
        'withScope',
        '768666yCnXCz',
        'user_name',
        'labelSubmit',
        'title',
        '208gVXqhm',
        'feedback',
        'setTag',
        'email',
        '2403190WgLSoB',
        'sub_title_one',
        '12769548qcXDFa',
        '4DhEGQq',
        'submit_label',
        '6988XEiibr',
        'user_email',
        '22IxUGDr',
        '127285QedDBY',
        'subtitle2',
        'sub_title_two',
        '7605EFsrpw',
        '7VPEfiL',
        '98CIhZPD'
    ];
    _0x4fc2 = function () {
        return _0xeadfb2;
    };
    return _0x4fc2();
}
	 client(properties, context);
}