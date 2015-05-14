/**
 * Created by Loski on 5/13/15.
 */
KISSY.use(['htmlEditor/htmlEditor','index/highlighter','index/preload','bui/overlay'], function (S,HtmlEditor,Highlighter,Preload,Overlay) {
    var preloadObj = new Preload();
    /*模版渲染*/
    var nHtmlEditor = new HtmlEditor();
    var htmlDB = nHtmlEditor.getDB();
    var renderResult;
    /*生成代码声明*/
    var hlObj = new Highlighter();

    /*绑定事件*/
    nHtmlEditor.bindEvent('#c_frame','click',function(){
        if($(this).attr('checked')){
            htmlDB.frame = true;
            renderResult = nHtmlEditor.render('#htmltpl',htmlDB,'.xmlcode');
            hlObj.refresh('brush: html','.xmlcode','#J_htmlloader','htmlCode');
        }else{
            htmlDB.frame = false;
            renderResult = nHtmlEditor.render('#htmltpl',htmlDB,'.xmlcode');
            hlObj.refresh('brush: html','.xmlcode','#J_htmlloader','htmlCode');
        }
    });
    nHtmlEditor.bindEvent('#c_css','click',function(){
        if($('#c_frame').attr('checked') && $(this).attr('checked')){
            htmlDB.ink_style = true;
            renderResult = nHtmlEditor.render('#htmltpl',htmlDB,'.xmlcode');
            hlObj.refresh('brush: html','.xmlcode','#J_htmlloader','htmlcode');
        }else if(!$(this).attr('checked')){
            htmlDB.ink_style = false;
            renderResult = nHtmlEditor.render('#htmltpl',htmlDB,'.xmlcode');
            hlObj.refresh('brush: html','.xmlcode','#J_htmlloader','htmlcode');
        }else if($(this).attr('checked')){
            $(this).removeAttr('checked');
            BUI.Message.Show({
                msg:'请先生成骨架 =^.^=',
                icon:'warning',
                autoHide : true,
                buttons:[],
                autoHideDelay : 2500
            });
        }
    });
    nHtmlEditor.bindEvent('#c_js','click',function(){
        if($('#c_frame').attr('checked') && $(this).attr('checked')){
            htmlDB.ink_js = true;
            renderResult = nHtmlEditor.render('#htmltpl',htmlDB,'.xmlcode');
            hlObj.refresh('brush: html','.xmlcode','#J_htmlloader','htmlcode');
        }else if(!$(this).attr('checked')){
            htmlDB.ink_js = false;
            renderResult = nHtmlEditor.render('#htmltpl',htmlDB,'.xmlcode');
            hlObj.refresh('brush: html','.xmlcode','#J_htmlloader','htmlcode');
        }else if($(this).attr('checked')){
            $(this).removeAttr('checked');
            BUI.Message.Show({
                msg:'请先生成骨架 =^.^=',
                icon:'warning',
                autoHide : true,
                buttons:[],
                autoHideDelay : 2500
            });
        }
    });

//    var xmlcode = '<html><br /><body><br /><div>123</div><br /></body><br /></html>';
//    $('.xmlcode').text(xmlcode);
    //$('.htmlplayground').load(r);




    /*修正界面高度*/
    preloadObj.fix();

});