KISSY.add('index/index', function (S,require,exports,module) {
    var Preload = require('index/preload');
    var preloadObj = new Preload();
    var Overlay = require('bui/overlay');
    //$('body').htmlcode($('.playground'));
    //SyntaxHighlighter.defaults['gutter'] = false;

    preloadObj.init();


    function showMessage(msg,icon,delay) {
        BUI.Message.Show({
            msg:msg,
            icon:icon,
            autoHide : true,
            buttons:[],
            autoHideDelay : delay||1500
        });
    }
    /*
    * 左侧工具栏锁定事件
    * */
    $('#J_leftLock').on('click', function () {
        if(preloadObj.stickStat['content']){
//            如果右侧有锁则解锁
            preloadObj.stick('content');
            $('#J_rightLock').toggleClass('x-icon-warning');
            $('#content').toggleClass('leftmargin');
        }
        preloadObj.stick('stickme');
        $(this).toggleClass('x-icon-error');

        showMessage('~~ !左侧工具栏锁定状态……切换完毕! \\(OwO)/ ~~','success');
    });

    /*
     * 右侧工具栏锁定事件
     * */
    $('#J_rightLock').on('click', function () {
        if(preloadObj.stickStat['stickme']){
//            如果左侧有锁则解锁
            preloadObj.stick('stickme');
            $('#J_leftLock').toggleClass('x-icon-error');
        }

        preloadObj.stick('content');
        $(this).toggleClass('x-icon-warning');
//        修正左侧距离和宽度70%的样式
        $('#content').toggleClass('leftmargin');

        showMessage('~~ !右侧控制台锁定状态……切换完毕! \\(OmO)/ ~~','success');
    });


    $('#J_htmlXTP').load('./views/htmlEditor/htmlTemplate.html');

});

KISSY.use('index/index');