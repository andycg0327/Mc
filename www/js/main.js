myApp.onPageInit('main', function (page) {
    vue_main = new Vue({
        el: page.container.children[1],
        data: {
            moment: moment,
            title: page.query.title,
            countDown: 120000
        },
        methods: {
            openConfirm: function() {
                var self = this;
                myApp.modal({
                    title: '確認兌換優惠',
                    text: '請確認您已在麥當勞櫃台，點選「立即兌換」後，需於兩分鐘內出示給結帳人員',
                    buttons: [{
                        text: '暫不兌換'
                    },{
                        text: '立即兌換',
                        onClick: function () {
                            globalData.used[page.query.index] = moment().add(2, 'minute');
                            self.countDown -= 1000;
                            // self.countDown = moment(120000);
                            setInterval(function() { self.countDown -= 1000; }, 1000);
                        }
                    }]
                });
            }
        }
    });
});