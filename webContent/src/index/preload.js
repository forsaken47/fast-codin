/**
 * Created by Admin on 2015/3/9.
 */
KISSY.add('index/preload', function (S,require,exports,module) {
    var Node = require('node');
    var $ = Node.all,
        win = $(window);

    function fixSidebarHeight(){
        var leftbar = $('#sidebar').height();
        var d = $('#content').height();
//        var ds = $('#sidebar').height();
        $('#sidebar').css({ "min-height": d });
        if(leftbar>d){
            $('.article').css({ "min-height": leftbar-118 });
        }
    }

    function sticky($target,flag){
        var top = $($target).offset().top,
            scrollTop = 0,
            stickyCls = 'sticky';
        function bufferScroll(){
            S.buffer(function(){
                scrollTop = win.scrollTop();
                if (top < scrollTop) {
                    $($target).addClass(stickyCls);
                } else {
                    $($target).removeClass(stickyCls);
                }
            },1000/60)();
        }

        if(flag === "detach"){
            $($target).removeClass(stickyCls);
            win.detach('scroll');
        }else{

            win.on('scroll', bufferScroll);
        }
    }


    function appendCat() {

        var $cat = $('#stickme');

        $('.J_ScrollTo').on('click', function (e) {
            e.preventDefault();
            win.animate({scrollTop: $(e.target).attr('data-scrollto')}, 0.5);
        });


        //sticky($cat);
    }
    //appendCat();
//    fixSidebarHeight();

    /*上面是处理动画以及窗口位置限制*/
    /*这个函数用来显隐收起动画*/
    function infoPlay(){
        var infoTrigger = $('.gallery .nav-header');
        infoTrigger.on('mouseenter mouseleave',function(){
           $(this).children('.info').toggleClass('hide');
           $(this).children('.info-header').toggleClass('left');
        });
    }
    function doHideShow(){
        var infoTrigger = $('.nav-header');
        infoTrigger.on('click',function(){
            $(this).parent().children().toggleClass('hide');
            $(this).removeClass('hide');
            /*如果是右侧题头 则隐藏复制提示信息*/
            if($(this).one('.copy')){
                $(this).one('.copy').toggleClass('hide');
            }
            var infoText = $(this).children('.info');
            if(infoText.text()==="[收起]"){
                infoText.text('[显示]');
            }else{
                infoText.text('[收起]');
            }

            /*修正高度*/
            fixSidebarHeight();
        });
    }
    function disableFunctions(){
        jQuery("#J_htmlGallery :input:not(#c_frame)").attr("disabled","disabled");
    }

    function openFunctions() {
        jQuery("#J_htmlGallery :input:not(#c_frame)").attr("disabled",false);
    }
    function detectIE(){
        var isIE = S.UA.ie;
        if(isIE){
            $('.iei').toggleClass('hide');
            $('.h30').toggleClass('hide');
        }
    }
    function preload(){
        var self = this;

        this.init = function () {
            detectIE();
            fixSidebarHeight();
            infoPlay();
            doHideShow();
            disableFunctions();
        };
        this.fix = function () {
          fixSidebarHeight();
        };
        this.disableFunc = function(){
            disableFunctions();
        };
        this.openFunc = function () {
            openFunctions();
        };

        self.stickStat = {};
        this.stick = function (target,flag) {
            var $target = $('#' + target);

            if(self.stickStat[target] || flag === "detach" ){
                sticky($target,"detach");
                self.stickStat[target] = false;
            }else{
                sticky($target,flag);
                self.stickStat[target] = true;
            }
        }
    }

    module.exports = preload;

});

//KISSY.use('index/preload');