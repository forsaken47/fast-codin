/**
 * Created by Loski on 5/12/15.
 */
KISSY.add('htmlEditor/src/jsondb', function (S,require,exports,module) {
    function Jsondb(){
        this.jsonData = {
            frame:false,
            title: "",
            author: "",
            description: "",
            css_href: null,
            js_src:null,
            ink_style: false,
            ink_js:false,
            body_cont: null,
            script_st: "script",
            script_ed: "/script"
        };
    }
    module.exports = Jsondb;
});