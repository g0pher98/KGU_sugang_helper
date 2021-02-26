let naver_clock = undefined;

function update_clock() {
    naver_clock.setSeconds(
        naver_clock.getSeconds() + 1
    )
    format = /..:..:../.exec(naver_clock.toJSON())[0]
    $('#clock #naver .time').text(format);
}

$(function() {
    fetch("https://m.search.naver.com/p/csearch/dcontent/util/time.nhn?passportKey=7baf9ac4f592186f97edda7d21bceef4fc5115b8&_callback=window.__jindo2_callback._7224&_format=yyyy%2FMM%2Fdd%2FHH%2Fmm%2Fss%2FSSS")
    .then(r => r.text()).then(function(resp) {
        var date = /".*"/.exec(resp)[0].slice(1, -1).split('/');
        datetime = date.slice(0,3).join('-') + ' '
            + date.slice(3,6).join(':') + '.'
            + date[6];
        date = new Date(datetime);
        date.setHours(date.getHours() + 9);
        naver_clock = date;
        setInterval(update_clock, 1000);
    });
});