/**
 * Created by Loski on 5/13/15.
 */
KISSY.use(['htmlEditor/htmlEditor','index/highlighter','index/preload','bui/overlay','mockServer/src/mock-html'], function (S,HtmlEditor,Highlighter,Preload,Overlay,Mockhtml) {
    var preloadObj = new Preload();
    /*模版渲染*/
    var nHtmlEditor = new HtmlEditor();
    var htmlDB = nHtmlEditor.getDB();
    var renderResult;
    /*生成代码声明*/
    var hlObj = new Highlighter();
    /*监听playground的load事件模块*/
    var mockObj = new Mockhtml();

    /*绑定事件*/
    function privateRefresh(ajaxName) {
        renderResult = nHtmlEditor.render('#htmltpl',htmlDB,'.xmlcode');
        hlObj.refresh('brush: html','.xmlcode','#J_htmlloader','htmlCode');

        mockObj.listen(ajaxName,renderResult);
        $('.htmlplayground').load(ajaxName);
        mockObj.clear();
    }

    function showMessage(msg,icon) {
        BUI.Message.Show({
            msg:msg,
            icon:icon,
            autoHide : true,
            buttons:[],
            autoHideDelay : 1000
        });
    }
    //生成骨架
    nHtmlEditor.bindEvent('#c_frame','click',function(){
        if($(this).attr('checked')){
            preloadObj.openFunc();
            htmlDB.frame = true;

            privateRefresh('c_frame.do');
            showMessage('~~ !BOOM! \\(OwO)/ ~~','success');

        }else{
            preloadObj.disableFunc();
            htmlDB.frame = false;

            privateRefresh('c_frame.do');
        }
    });
    //头引入KISSY-CSS
    nHtmlEditor.bindEvent('#c_css','click',function(){
        if($('#c_frame').attr('checked') && $(this).attr('checked')){
            htmlDB.ink_style = true;

            privateRefresh('c_css.do');
            showMessage('~~ !BOOM! \\(OwO)/ ~~','success');

        }else if(!$(this).attr('checked')){
            htmlDB.ink_style = false;

            privateRefresh('c_css.do');

        }else if($(this).attr('checked')){
            $(this).removeAttr('checked');

            showMessage('请先生成骨架 =^.^=','warning');
        }
    });
    //尾引入KISSY-JS
    nHtmlEditor.bindEvent('#c_js','click',function(){
        if($('#c_frame').attr('checked') && $(this).attr('checked')){
            htmlDB.ink_js = true;

            privateRefresh('c_js.do');
            showMessage('~~ !BOOM! \\(OwO)/ ~~','success');

        }else if(!$(this).attr('checked')){
            htmlDB.ink_js = false;

            privateRefresh('c_js.do');

        }else if($(this).attr('checked')){
            $(this).removeAttr('checked');
            showMessage('请先生成骨架 =^.^=','warning');
        }
    });

    //修改title
    nHtmlEditor.bindEvent('#btn_title','click',function(){
        if($('#c_frame').attr('checked') && $('#t_title').val()!==""){
            htmlDB.title = $('#t_title').val();

            privateRefresh('t_title.do');
            showMessage('~~ !BOOM! \\(OwO)/ ~~','success');

        }else if( $('#t_title').val() === "" ){
            showMessage('请填入title内容 =^.^=','warning');

        }else if(!$('#c_frame').attr('checked')){
            showMessage('请先生成骨架 =^.^=','warning');
        }
    });
    //修改作者
    nHtmlEditor.bindEvent('#btn_author','click',function(){
        if($('#c_frame').attr('checked') && $('#t_author').val()!==""){
            htmlDB.author = $('#t_author').val();

            privateRefresh('t_author.do');
            showMessage('~~ !BOOM! \\(OwO)/ ~~','success');

        }else if( $('#t_author').val() === "" ){
            showMessage('请填入author内容 =^.^=','warning');

        }else if(!$('#c_frame').attr('checked')){
            showMessage('请先生成骨架 =^.^=','warning');
        }
    });
    //修改描述
    nHtmlEditor.bindEvent('#btn_description','click',function(){
        if($('#c_frame').attr('checked') && $('#t_description').val()!==""){
            htmlDB.description = $('#t_description').val();

            privateRefresh('t_description.do');
            showMessage('~~ !BOOM! \\(OwO)/ ~~','success');

        }else if( $('#t_description').val() === "" ){
            showMessage('请填入description内容 =^.^=','warning');

        }else if(!$('#c_frame').attr('checked')){
            showMessage('请先生成骨架 =^.^=','warning');
        }
    });
    //插入外部CSS引用
    nHtmlEditor.bindEvent('#btn_incss','click',function(){
        if($('#c_frame').attr('checked') && $('#t_css').val()!==""){
            htmlDB.css_href.push($('#t_css').val());

            privateRefresh('t_css.do');
            showMessage('~~ !BOOM! \\(OwO)/ ~~','success');

        }else if( $('#t_css').val() === "" ){
            showMessage('请填入href资源地址 =^.^=','warning');

        }else if(!$('#c_frame').attr('checked')){
            showMessage('请先生成骨架 =^.^=','warning');
        }
    });

    /*
     *开始主体功能
     */
    var addObj = $('#J_htmlbodyFuncCust').html().replace(/disabled/g,"data-rub");

    nHtmlEditor.bindEvent('#b_type','change', function (e) {
        var tarO = $('#b_altype');
        switch (e.target.value){
            case "alter" :
                $('#J_htmlbodyFuncAlt').html('');
                tarO.removeClass('invisible');
                break;
            case "div" :
                tarO.addClass('invisible');
                break;
            case "a" :
                tarO.addClass('invisible');
                $('#J_htmlbodyFuncAlt').load('./views/htmlEditor/selectType.html #a',function(){preloadObj.fix();});
                break;
            case "button" :
                $('#J_htmlbodyFuncAlt').load('./views/htmlEditor/selectType.html #button',function(){preloadObj.fix();});
                tarO.addClass('invisible');
                break;
            case "form" :
                $('#J_htmlbodyFuncAlt').load('./views/htmlEditor/selectType.html #form',function(){preloadObj.fix();});
                tarO.addClass('invisible');
                break;
            case "ul" :
                $('#J_htmlbodyFuncAlt').load('./views/htmlEditor/selectType.html #ul',function(){preloadObj.fix();});
                tarO.addClass('invisible');
                break;
            case "ol" :
                $('#J_htmlbodyFuncAlt').load('./views/htmlEditor/selectType.html #ol',function(){preloadObj.fix();});
                tarO.addClass('invisible');
                break;
            default :
                tarO.addClass('invisible');
        }
        $('#J_htmlbodyFuncCust').html(addObj);

    });


    nHtmlEditor.delegateEvent('#btn_badd','click',function (e) {
        $('#J_htmlbodyFuncCust').append('<div style="height:15px;border-top:1px rgb(215,202,153) solid"></div>');
        $('#J_htmlbodyFuncCust').append(addObj);
        $(e.target).addClass('invisible');
        preloadObj.fix();
    });


    /*修正界面高度*/
    preloadObj.fix();

});