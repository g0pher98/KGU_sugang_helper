let frames = {}

function tool_extend_timer() {
    // 시간 자동 연장
    var time_extend_function = frames.core_frame[0].contentWindow.extendTimer;
    setInterval(time_extend_function, 10000);
}

function tool_somang_auto() {
    frames.wish_frame = frames.main_document.find('#gview_gridBasket');
    frames.wish_frame.ready(function() {
        frames.wish_table = frames.wish_frame.find('table#gridBasket');
        var $wish_trs = frames.wish_table.find('tr:gt(0)');

        // 자동 클릭
        $wish_trs.each(function(i, e) {
            $(e).find('td button').click();
        });
    });
}

function set_tools() {
    tool_extend_timer();
    tool_somang_auto();
}

 

$(function() {
    frames.main_iframe = $(top.document).find('iframe#Main');
    frames.main_iframe.ready(function() {
        frames.core_frame = frames.main_iframe.contents().find('frame#coreMain');
        frames.core_frame.ready(function() {
            console.log(3, frames.core_frame)
            frames.main_document = $(frames.core_frame[0].contentDocument);
            frames.main_document.find('#menu_01_0300').on('click', set_tools);
        });
    });
})