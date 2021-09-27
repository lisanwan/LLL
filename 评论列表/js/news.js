$(function() {
    function huoqvxinwen() {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/news',
            success: function(res) {
                console.log(res);
            }
        })
    }
    huoqvxinwen()
})