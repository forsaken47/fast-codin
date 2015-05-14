/**
 * Created by Loski on 5/12/15.
 */
KISSY.add('index/highlighter', function (S,require,exports,module) {
    var that = this;
    var Node = require('node');
    this.refreshCodeRegion = function(brushClass,hidDom,tarDom,tarName){
        var preJSFrameSt = '<pre class="' + brushClass + ' ' + tarName +'">';
        var preJSFrameEnd = '</pre>';
        var regDom = $(hidDom).text().replace(/</g,"&lt;").replace(/>/g,"&gt;");
        var targetNode = preJSFrameSt + regDom + preJSFrameEnd;
        Node.all(tarDom).prepend(targetNode);
    };
    this.cleanCode = function(tarDom){
        var tarNode = Node.all(tarDom).all('.syntaxhighlighter').parent();
        if(tarNode!=null){

            tarNode.remove();
        }
    };

    function highlighter(){
        var self = this;
        SyntaxHighlighter.config.bloggerMode = true;
        SyntaxHighlighter.defaults['smart-tabs'] = true;
        SyntaxHighlighter.defaults['toolbar'] = false;

        this.refresh = function(brushClass,hidDom,tarDom,tarName){
            that.cleanCode(tarDom);
            that.refreshCodeRegion(brushClass,hidDom,tarDom,tarName);
            SyntaxHighlighter.highlight(null,$('.' + tarName)[0]);
        };




        //SyntaxHighlighter.all();

    }
    module.exports = highlighter;
});