$(function() {
    $('#appender button.submit').on('click', function(e) {
        var $button = $(e.currentTarget);
        var $tr = $button.parents('tr');
        var values = $tr.find('input:lt(2)').map(function(i, e) {
            return $(e).val();
        });
        
        $('#sugang_list tbody').append(`
            <tr>
                <td><input type="checkbox"></td>
                <td><button class="tr_req">신청</button></td>
                <td>${values[0]}</td>
                <td>${values[1]}</td>
                <td>대기</td>
                <td><button class="tr_del">X</button></td>
            </tr>
        `);
    });

    $(document.body).on('click', '.tr_del', function(e) {
        var $button = $(e.currentTarget);
        var $tr = $button.parents('tr');
        $tr.remove();
    });
})