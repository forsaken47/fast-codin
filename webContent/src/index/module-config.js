/**
 * Created by Admin on 2015/1/29.
 */
KISSY.config({
    /* 开启自动 combo 模式
     combine:true,
     kissy 库内置模块的时间戳
     tag:'2012',
     kissy 的基准路径
     base:'http://x.com/a',
     */
    'packages':[
        //define an module which is named with...
         {
             name :'templates',
            //开启后调用的是未压缩的文件
            debug:true,
            tag: '20150311',
            base : './src',
            combine:false,
            ignorePackageNameInUri: false
        },
        {
            name :'index',
            //开启后调用的是未压缩的文件
            debug:true,
            tag: '20150311',
            base : './src',
            combine:false,
            ignorePackageNameInUri: false
        },
        {
            name :'htmlEditor',
            //开启后调用的是未压缩的文件
            debug:true,
            tag: '20150311',
            base : './src',
            combine:false,
            ignorePackageNameInUri: false
        }
    ]
});