moment.tz.setDefault("Asia/Taipei");
moment.locale('zh-tw');

// 判斷平台並修改樣式
if (Framework7.prototype.device.android) {
    $('<link rel="stylesheet" href="lib/framework7/css/framework7.material.min.css">' + '<link rel="stylesheet" href="lib/framework7/css/framework7.material.colors.min.css">').prependTo('head');
} else {
    $('.pages.navbar-fixed').removeClass('navbar-fixed').addClass('navbar-through');
    $('.page .navbar').prependTo('.view');
    $('<link rel="stylesheet" href="lib/framework7/css/framework7.ios.min.css">' + '<link rel="stylesheet" href="lib/framework7/css/framework7.ios.colors.min.css">').prependTo('head');
}

// Initialize app
var myApp = new Framework7({
    // init: false, //Disable App's automatic initialization
    material: Framework7.prototype.device.android,
    swipeBackPage: false,
    // swipePanel: 'left',
    // swipePanelActiveArea: 20,
    smartSelectOpenIn:'popup',
    smartSelectBackText: '返回'
});

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    // dynamicNavbar: true
});

myApp.onPageInit('index', function (page) {
    vue = new Vue({
        el: '[data-page="index"].page .page-content',
		data: {
      moment: moment,
      timestamp: moment().format('YYYY 年 M 月 D 日')
    }
    });
}).trigger();


// Handle Cordova Device Ready Event
$(document).on('deviceready', function() {
    // Android 返回鍵
    document.addEventListener("backbutton", function() {
        if(mainView.activePage.name == 'index') { // 已在首頁
            myApp.modal({
                title: '訊息',
                text: '確定結束應用程式嗎？',
                buttons: [{
                    text: '取消'
                },{
                    text: '確定',
                    onClick: function () {
                        navigator.app.exitApp();;
                    }
                }]
            });
        } else    // 上一頁
            mainView.router.back();
    }, false);
});