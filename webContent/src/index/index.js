KISSY.add('index/index', function (S,require,exports,module) {
    var Preload = require('index/preload');
    var preloadObj = new Preload();
    //$('body').htmlcode($('.playground'));
    //SyntaxHighlighter.defaults['gutter'] = false;

    preloadObj.init();
    $('#J_htmlXTP').load('./views/htmlEditor/htmlTemplate.html');

});

KISSY.use('index/index');