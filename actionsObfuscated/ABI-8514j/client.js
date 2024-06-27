function(properties, context){
	(function (_0x5167d1, _0x5114c0) {
    const _0x4bf2ef = _0x3108, _0x50a3ec = _0x5167d1();
    while (!![]) {
        try {
            const _0x3d2fc7 = -parseInt(_0x4bf2ef(0xb6)) / 0x1 + parseInt(_0x4bf2ef(0xb5)) / 0x2 * (parseInt(_0x4bf2ef(0xc2)) / 0x3) + parseInt(_0x4bf2ef(0xc3)) / 0x4 * (parseInt(_0x4bf2ef(0xbe)) / 0x5) + parseInt(_0x4bf2ef(0xc4)) / 0x6 * (parseInt(_0x4bf2ef(0xb3)) / 0x7) + -parseInt(_0x4bf2ef(0xb4)) / 0x8 + parseInt(_0x4bf2ef(0xc1)) / 0x9 * (-parseInt(_0x4bf2ef(0xbb)) / 0xa) + parseInt(_0x4bf2ef(0xb8)) / 0xb * (parseInt(_0x4bf2ef(0xb1)) / 0xc);
            if (_0x3d2fc7 === _0x5114c0)
                break;
            else
                _0x50a3ec['push'](_0x50a3ec['shift']());
        } catch (_0x2dd340) {
            _0x50a3ec['push'](_0x50a3ec['shift']());
        }
    }
}(_0x2d4f, 0x4879d));
function _0x3108(_0xc27512, _0x5b57c2) {
    const _0x2d4fc7 = _0x2d4f();
    return _0x3108 = function (_0x3108a9, _0x167ab9) {
        _0x3108a9 = _0x3108a9 - 0xaf;
        let _0x50aa72 = _0x2d4fc7[_0x3108a9];
        return _0x50aa72;
    }, _0x3108(_0xc27512, _0x5b57c2);
}
function client(_0x2f456d, _0xc8c59a) {
    const _0x36aeb8 = _0x3108;
    if (!_0x2f456d['event'])
        return;
    if (_0x2f456d[_0x36aeb8(0xba)] === '')
        return;
    let _0x4c9420 = {};
    _0x2f456d['title'] && (_0x4c9420[_0x36aeb8(0xc8)] = _0x2f456d[_0x36aeb8(0xc8)]);
    _0x2f456d['sub_title_one'] && (_0x4c9420[_0x36aeb8(0xb9)] = _0x2f456d['sub_title_one']);
    _0x2f456d['sub_title_two'] && (_0x4c9420[_0x36aeb8(0xc5)] = _0x2f456d['sub_title_two']);
    _0x2f456d[_0x36aeb8(0xbd)] && (_0x4c9420[_0x36aeb8(0xc7)] = _0x2f456d['submit_label']);
    let _0x3ebd9a = {};
    _0x2f456d['user_name'] && (_0x3ebd9a[_0x36aeb8(0xb2)] = _0x2f456d[_0x36aeb8(0xc6)]), _0x2f456d['user_email'] && (_0x3ebd9a[_0x36aeb8(0xbc)] = _0x2f456d[_0x36aeb8(0xc9)]), Sentry[_0x36aeb8(0xbf)](_0x37cc16 => {
        const _0x1b3350 = _0x36aeb8;
        _0x37cc16[_0x1b3350(0xc0)](_0x1b3350(0xaf), 'feedback');
        let _0x30b737 = Sentry[_0x1b3350(0xb7)](_0x2f456d[_0x1b3350(0xba)]);
        Sentry[_0x1b3350(0xb0)]({
            'eventId': _0x30b737,
            ..._0x4c9420,
            ..._0x3ebd9a
        });
    });
}
function _0x2d4f() {
    const _0x510556 = [
        '40clPYWq',
        'email',
        'submit_label',
        '259030vYuOds',
        'withScope',
        'setTag',
        '795231vvjTnE',
        '849PNslsd',
        '36lCBnbf',
        '2478AIuiHL',
        'subtitle2',
        'user_name',
        'labelSubmit',
        'title',
        'user_email',
        'mechanism',
        'showReportDialog',
        '180fnAjDk',
        'name',
        '350bfgueQ',
        '3501920AGRJDx',
        '2802dqcxCk',
        '38155ypBPgs',
        'captureMessage',
        '178057OElxOF',
        'subtitle',
        'event'
    ];
    _0x2d4f = function () {
        return _0x510556;
    };
    return _0x2d4f();
}
	 client(properties, context);
}