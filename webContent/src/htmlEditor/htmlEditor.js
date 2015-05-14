/**
 * Created by Loski on 5/12/15.
 */
KISSY.add('htmlEditor/htmlEditor', function (S,require,exports,module) {
    var XTemplate = require('xtemplate');
    var Node = require('node');
    var Jsondb = require('./src/jsondb');
    function HtmlEditor(){
        var self = this;
        self.getDB = function(){
            var tmpdb = new Jsondb();
            return tmpdb.jsonData;
        };
        self.render = function(selector,data,target){
            var tpl = Node.all(selector).html();
            var renderer = new XTemplate(tpl).render(data);
            Node.one(target).text(renderer);
            return renderer;
        };
        self.bindEvent = function(tar,evt,func){
            $(tar).on(evt,func);

        };
    }
    module.exports = HtmlEditor;
});