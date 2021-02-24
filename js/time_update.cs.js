
$(function() {
    const top_body = top.document.body;
    
    setInterval(
        function() {
            var core_main_body = $(top_body).find('iframe#Main').contents().find('frame#coreMain')[0].contentDocument.body;
            var $button = $(core_main_body).find('.main-frame header table td.alignL button');
            $button.click();
        }, 10000
    )
})

