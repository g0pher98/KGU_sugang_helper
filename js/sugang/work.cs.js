let area = {}

function tool_somang_auto() {
    area.wish_frame = area.main_document.find('#gview_gridBasket');
    area.wish_frame.ready(function() {
        area.wish_table = area.wish_frame.find('table#gridBasket');
        var $wish_trs = area.wish_table.find('tr:gt(0)');

        // 자동 클릭
        $wish_trs.each(function(i, e) {
            $(e).find('td button').click();
        });
    });
}

function set_tools() {
    tool_somang_auto();
}

 

$(function() {
    // 우클릭 방지 해제 (TODO 아직 코드 이해 못함)
    // https://stackoverflow.com/questions/2961964/how-to-re-enable-the-context-menu-in-this-case
    (function(w){
        w.addEventListener('contextmenu', function(e) {
            e.stopPropagation()
        }, true);
        for(var j = 0, f; f = w.frames[j]; j++){
            try {
                arguments.callee(f)
            } catch(e) {}
        }
    })(window);

    area.Main = $(top.document).find('iframe#Main');
    area.Main.on('load',function() {
        area.coreMain = area.Main.contents().find('frame#coreMain');
        area.coreMain.ready(function() {
            console.log(3, area.coreMain)
            area.main_document = $(area.coreMain[0].contentDocument);
            area.main_document.ready(function() {
                area.main_document.find('#menu_01_0300').on('click', set_tools);
                // 키보드 f5, enter, ctrl 등 방지기능 해제
                console.log(area.main_document[0])
                console.log(area.coreMain[0].contentDocument.onkeydown)
                area.main_document[0].onkeydown = null;
                // 시간 자동 연장
                console.log(area.coreMain[0].contentWindow)
                var time_extend_function = area.coreMain[0].contentWindow.extendTimer;
                setInterval(time_extend_function, 10000);
            });
        });
    });
})