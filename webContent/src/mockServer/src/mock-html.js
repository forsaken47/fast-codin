/**
 * Created by Loski on 5/15/15.
 */
KISSY.add('mockServer/src/mock-html', function (S,require,exports,module) {
    var that = this;
    var Node = require('node');



    function mockHtml(){
        var self = this;

        self.listen = function (url,htmltext) {
            $.mockjax({
                url:url,
                status:200,
                responseTime: 100,
                contentType: 'text/html',
                responseText: htmltext
            });
        };
        self.clear = function (id) {
            if(typeof id !== "undefined"){
                $.mockjax.clear(id);
            }else{
                $.mockjax.clear();
            }
        };

    }
    module.exports = mockHtml;
});