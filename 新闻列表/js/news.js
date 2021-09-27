$(function() {
    $(function() {
        // 时间补零
        function bul(n) {
            return n < 10 ? '0' + n : n
        }
        template.defaults.imports.dateFormat = function(dtstr) {
            var dt = new Date(dtstr);
            var y = dt.getFullYear();
            var m = bul(dt.getMonth() + 1);
            var d = bul(dt.getDate());
            var h = bul(dt.getHours());
            var m = bul(dt.getMinutes());
            var s = bul(dt.getSeconds());
            return `${y}+${m}-${d}-${h}-${m}-${s}`
        }
    })

    function huoqvxinwen() {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/news',
            success: function(res) {
                if (res.status !== 200) return alert('获取新闻列表失败，请稍后再试')
                for (let i = 0; i < res.data.length; i++) {
                    res.data[i].tags = res.data[i].tags.split(',')
                }
                console.log(res);
                var htmlStr = template('news', res);
                $('#news-list').html(htmlStr)
                console.log(res);
            }
        })
    }
    huoqvxinwen()
})